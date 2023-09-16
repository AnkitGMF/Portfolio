import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: [true,"Please Enter a name"],
    },
    email:{
        type: String,
        required: [true,"Please Enter a email"],
    },
    message:{
        type: String,
        required: [true,"Please Enter a message"],
    }

})

const Message = mongoose.models.message || mongoose.model('message',messageSchema);

export default Message;
