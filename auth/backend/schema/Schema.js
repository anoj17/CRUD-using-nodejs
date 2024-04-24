import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model('auth',userSchema)

export default User