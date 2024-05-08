import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    image: {
        type: String
    }
}, {timeStamp: true})

const User = mongoose.model('auth',userSchema)

export default User