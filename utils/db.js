const mongoose = require('mongoose')


const URI = 'monogdb://127.0.0.1:27017/mern_admin'
// mongoose.connect()

const connectDb = async() => {
    try {
        await mongoose.connect(URI)
        console.log('connection successfull to Db')
    } catch (error) {
        console.error("Database connection failed")
        process.exit(0)
    }
}

module.exports = connectDb