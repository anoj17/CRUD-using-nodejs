import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phoneNumber: String
})

const user = mongoose.model('user', userSchema)

export default user