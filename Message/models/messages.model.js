const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
  sender: {
    type:String,
    required:true
  },
  recipient: {
    type:String,
    required:true
  },
  text: {
    type:String,
    required:true
  },
  dateOfSend: {
    type:Date,
    default:Date.now
},
  seen: {
    type:Boolean,
    default:false
}
});

module.exports = mongoose.model('Message', messageSchema);
