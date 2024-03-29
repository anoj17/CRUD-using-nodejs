import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    fname: String,
    lname: String,
    email: {
      type: String,
      unique: true
    },
    password: String,
    cpassword: String,
    // image: String
})

const User = mongoose.model('User', userSchema)

export default User