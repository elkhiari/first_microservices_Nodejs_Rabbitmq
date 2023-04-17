const express = require('express')
require('dotenv').config()
const app = express()
const {connect} = require('./db/database')
const {authRoute} = require('./routes/auth.route')


app.use(express.json())

app.use('/api/v1/auth/',authRoute)

const startingServer = async(URI,PORT)=>{
    try {
        await connect(URI)
        app.listen(PORT,console.log("APP WORKING"))
    } catch (error) {
        console.log(error)
    }
}

startingServer(process.env.URI,process.env.PORT)