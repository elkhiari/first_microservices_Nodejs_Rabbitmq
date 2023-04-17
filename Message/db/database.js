const mongoose = require('mongoose')
mongoose.set('strictQuery',true)
exports.connect = async(URI) =>{
    try {
        mongoose.connect(URI)
        console.log('DB CONNECTED')
    } catch (error) {
        console.log(error)
    }
}