const captainModel = require('../models/captain.model.js');
const blacklistTokensModel = require('../models/blacklistToken.model.js');
const captainService = require('../services/captain.service.js');
const {validationResult} = require('express-validator');


module.exports.registerCaptain = async (req, res, next) => {


    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password, vehicle} = req.body;

    const captainExists = await captainModel.findOne({email});

    if(captainExists) {
        return res.status(400).json({message: 'Captain already exists'});
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        ...fullname,
        email,
        password: hashedPassword,
        ...vehicle
    });


    const token = captain.generateAuthToken();

    res.status(201).json({token,captain});
}

module.exports.loginCaptain = async (req, res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;

    const captain = await captainModel.findOne({email}).select('+password');

    if(!captain) {
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const isPasswordValid = await captain.comparePassword(password);

    if(!isPasswordValid) {
        return res.status(400).json({message: 'Invalid email or password'});
    }

    const token = captain.generateAuthToken();

    res.cookie('token', token)

    res.status(200).json({token,captain});
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json(req.captain);
}

module.exports.logoutCaptain = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklistTokensModel.create({token})

    res.clearCookie('token');
    res.status(200).json({message: 'Logged out successfully'});
}
