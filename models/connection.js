//IMPORT-----------------------------------
require('dotenv').config()
const mongoose = require('mongoose')


const DATABASE_URI = process.env.DATABASE_URI
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

//CONNECT----------------------------------
mongoose.connect(DATABASE_URI, config)

mongoose.connection
    .on('open', () => console.log('Connected to Mongoose'))
    // since we have opened a connection we've got to close it
    // running a code block on close
    .on('close', () => console.log('Disconnected from Mongoose'))
    // handle any error that might happen
    // running a code block on error
    // using console.error to see that error
    .on('error', err => console.error(err))


//EXPORT----------------------------------------
module.exports = mongoose