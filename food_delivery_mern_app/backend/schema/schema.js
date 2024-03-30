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

//product section

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String
})

const User = mongoose.model('user', userSchema)
const Product = mongoose.model("product", productSchema)

export { User, Product }