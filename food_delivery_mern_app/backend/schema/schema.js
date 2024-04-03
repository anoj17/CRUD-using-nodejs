import mongoose from "mongoose";


const userSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cpassword: String
});

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: String,
  price: {
    type: String,
    required: true
  },
  description: String
});

const User = mongoose.model('user', userSchema)
const Product = mongoose.model("product", productSchema)

export { User, Product }