const usersModel = require("../models/users.model")

const searchUser = async(req,res,next)=>{
    try {
        const {email} = req.body
        const user = await usersModel.findOne({email:email})
        if(!user) return(res.status(404).json({error:"email not found"}))
        req.user = user
        next()
    } catch (error) {
        res.status(500).json({error:"internal server error"})
    }
}

const checkEmailExist =  async(req,res,next)=>{
    try {
        const {email} = req.body
        const user = await usersModel.findOne({email:email})
        if(user) return(res.status(409).json({error:"email Exist"}))
        next()
    } catch (error) {
        res.status(500).json({error:"internal server error"})
    }
}

const check_items_exist = (req,res,next)=>{
    try {
        const {firstName,lastName,email,mobile,password,birthdate} = req.body
        const items = {}
        if(!firstName)  items.firstName = "firstName empty"
        if(!lastName)  items.lastName = "lastName empty"
        if(!email)  items.email = "email empty"
        if(!mobile)  items.mobile = "mobile empty"
        if(!password)  items.password = "password empty"
        if(Object.keys(items).length != 0) return (res.status(500).json(items))
        else{
        next()
    }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {searchUser,checkEmailExist,check_items_exist}