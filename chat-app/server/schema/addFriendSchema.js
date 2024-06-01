import mongoose from 'mongoose'

const friendSchema = mongoose.Schema({
    fname: String,
    lname: String,
    phone: String,
    password: String,
    profile: String
})

const FriendSchema = mongoose.model('addFriend', friendSchema)

export default FriendSchema