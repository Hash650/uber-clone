const userModel = require('../models/user.model.js')
const userService = require('../services/user.service.js')
const { validationResult } = require('express-validator')
const blacklistTokensModel = require('../models/blacklistToken.model.js')

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    
    const {fullname:{firstname, lastname}, email, password} = req.body;

    const userExists = await userModel.findOne({email});

    if(userExists)
    {
        return res.status(400).json({message: 'User already exists'})
    }


    const hashedPassword = await userModel.hashPassword(password)
    
    const user = await userService.createUser({firstname,lastname, email, password:hashedPassword})
    
    const token = user.generateAuthToken();
    
    res.status(201).json({token, user})
    
}


module.exports.loginUser = async (req, res, next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) // we check if any of the placed validations failed
    {
        return res.status(400).json({ errors: errors.array() })
    }

    const {email, password} = req.body;

    const user = await userModel.findOne({email}).select('+password'); //find user by email and select the password field

    if(!user)
    {
        return res.status(401).json({message: 'Invalid email or password'})
    }

    const isMatch = await user.comparePassword(password, user.password); //compare the password provided by the user with the one in the database

    if(!isMatch)
    {
        return res.status(401).json({message: 'Invalid email or password'})
    }

    const token = user.generateAuthToken();

    res.cookie('token', token); //set response cookie with the token

    res.status(200).json({token, user})
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {

    console.log(res)
    res.clearCookie('token'); 

    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    const blacklistedToken = await blacklistTokensModel.create({token});

    res.status(200).json({message: 'Logged out successfully'})  
}