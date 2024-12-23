const userModel = require('../models/user.model.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const blacklistTokensModel = require('../models/blacklistToken.model.js')



// this middleware will be used to authenticate the user, will check for token in the cookies or the header of the request.
module.exports.authUser = async (req, res, next) =>{

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    // console.log(token)

    if(!token)
    {
        return res.status(401).json({message: 'Unauthorized'})
    }

    const isBlackListed = await blacklistTokensModel.findOne({token});

    if(isBlackListed)
    {
        res.status(401).json({message: 'Unauthorized'})
    }

    // When generating the jwt token in the user model, we passed the user id as the payload, so we can use it to find the user in the database
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)

        req.user = user;

        return next();
    }
    catch(err)
    {
        return res.status(401).json({message: 'Unauthorized'})
    }
}