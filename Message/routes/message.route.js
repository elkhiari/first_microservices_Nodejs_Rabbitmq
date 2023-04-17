const express = require('express')
const messageRoute = express.Router()

const { SendMessage,getMessage } = require('../controllers/message.controller')


messageRoute.route('/message/send').post(SendMessage)
messageRoute.route('/message/get').get(getMessage)


module.exports = {messageRoute}