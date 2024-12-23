const mongoose = require('mongoose')

function connectToDb()  {

    try{

        mongoose.connect(process.env.DB_CONNECT)
        console.log('Successfully connected to database')
    }
    catch(err){
        console.error('Error connecting to mongodb')
        process.exit(1)
    }
}

module.exports = connectToDb