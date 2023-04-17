const express = require('express')
require('dotenv').config()
const app = express()
const {connect} = require('./db/database')
const {messageRoute} = require('./routes/message.route')
//middlewire
app.use(express.json())

//routes
app.use('/api/v1/',messageRoute)


const startingServer = async(URI,PORT)=>{
    try {
        await connect(URI)
        app.listen(PORT,console.log("MESSAGING APP WORKING"))
    } catch (error) {
        console.log(error)
    }
}

startingServer(process.env.URI,process.env.PORT)