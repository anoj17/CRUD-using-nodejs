import mongoose from "mongoose";

const schemaModel = mongoose.Schema({
    fname: String,
    lname: String,
    phone: String,
    password: String,
    profile: String
})

const User = mongoose.model("user", schemaModel)

export default User