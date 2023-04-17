const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const usersModel = require("../models/users.model")

const login = async(req,res)=>{
    try {
         const {password} = req.body;
         const hashpassword = req.user.password;
         const comparePassword = await bcrypt.compare(password,hashpassword)
         if(!comparePassword) return(res.status(401).json({error:"password incorrect"}))
         const token = jwt.sign(
            {id:req.user._id,email:req.user.email},
            process.env.secret,
            {expiresIn: "24h" })
         res.status(200).json({message:"login success",token})
    } catch (error) {
        res.status(500).json({error:"internal server error"})
    }
}

const register = async(req,res)=>{
    try {
        const {firstName,lastName,email,mobile,password,birthdate} = req.body
        const hashpassword = await bcrypt.hash(password,10)
        if(!hashpassword) return(res.status(500).json({error:"internal server error"}))
        const newuser = new usersModel({
            firstName,
            lastName,
            email,
            mobile,
            password:hashpassword,
            birthdate
        })
        newuser.save()
        .then((newuser)=>res.status(201).json({message:'registered successfully'}))
        .catch((error)=>{res.status(500).json({error:error})
    })
    } catch (error) {
        res.status(500).json({error:"internal server error"})
    }
}


module.exports = {login,register}