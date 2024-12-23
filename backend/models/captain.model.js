const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const captainSchema = new mongoose.Schema({

    fullname:{

        firstname:{
            type: String,
            required: true,
            minLength: [3,'first name must be at least 3 characters long'],
        },
        lastname:
        {
            type: String,
            // required:true,
            minLength: [3,'last name must be at least 3 characters long'],
        },
    },

    email:{
        type:String,
        required:true,
        unique:true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'invalid email'],
    },

    password:{
        type:String,
        required:true,
        select: false,
        minLength: [6,'password must be at least 6 characters long'],
    },

    socketId: {
        type: String,
    },

    status: {
        type: String,
        enum: ['active','inactive'],
        default: 'inactive',
    },

    vehicle:
    {
        color: {
            type: String,
            required: true,
            minLength: [3,'color must be at least 3 characters long']
        },
        plate:{
            type: String,
            required: true,
            minLength: [6,'plate must be at least 6 characters long'],
        },
        capacity:{
            type: Number,
            required: true,
            min: [1,'capacity must be at least 1'],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car','motorcycle']
        }
    },

    location:{
        lat:{
            type: Number
        },
        long: {
            type: Number
        }
    }
});




captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

captainSchema.methods.comparePassword = async function(plainPassword){
    return await bcrypt.compare(plainPassword, this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;