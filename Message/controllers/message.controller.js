const { object } = require("webidl-conversions")
const messagesModel = require("../models/messages.model")

const SendMessage = async(req,res)=>{
    try {
        const {sender,recipient,text} = req.body
        const newMessage = new messagesModel({sender,recipient,text})
        await newMessage.save()
        .then((message)=>res.status(200).json({message:"sended succes"}))
        .catch((error)=>res.status(500).json({message:"internal server error"}))
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

const getMessage = async(req,res)=>{
    try {
        const {sender,recipient} = req.body
        await messagesModel.updateMany(
            { recipient:sender, seen: false },
            { $set: { seen: true } }
          )
        const Messages = await messagesModel.find({$or:[
            {sender,recipient},
            {sender:recipient,recipient:sender}
        ]})
        if(Object.keys(Messages).length === 0) return (res.status(404).json({error:"You do not have any messages with this user"}))

        res.status(200).json({Messages})
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

module.exports = {SendMessage,getMessage}