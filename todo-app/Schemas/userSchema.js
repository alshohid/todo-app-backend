const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 2,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }

}, {
    timestamps: true
})
const user= new mongoose.model('User',userSchema)
module.exports=user;