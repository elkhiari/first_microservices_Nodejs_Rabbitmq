const express = require('express')
const authRoute = express.Router()
const {login,register} = require('../controllers/auth.controllers')
const { searchUser,checkEmailExist,check_items_exist } = require('../middlewares/auth.middleware')


authRoute.route('/register').post(check_items_exist,checkEmailExist,register)
authRoute.route('/login').post(searchUser,login)

module.exports = {authRoute}