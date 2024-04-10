import { User, Product } from "../schema/schema.js"
import fs from 'fs'
// import Product from "../schema/schema.js"
// import multer from "multer"

// const upload = multer({ dest: "uploads/" })

export const signIn = async (req, res) => {
  console.log(req.body)
  try {
    const { fname, lname, email, password, cpassword } = req.body

    const existUser = await User.findOne({ email: email })

    if (existUser) {
      return res.status(201).json({ message: "User already registered!", alert: false })
    }

    const user = new User({
      fname,
      lname,
      email,
      password,
      cpassword,
      // image: req.file.filename
    })

    await user.save()
    return res.status(201).json({ message: "User register successfully", alert: true })
  } catch (error) {
    return res.status(422).json({ message: "Error while saving data", error })
  }
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const userEmail = await User.findOne({ email: email })

    if (userEmail) {
      const userPassword = userEmail.password

      if (password === userPassword) {
        const dataSend = {
          _id: userEmail._id,
          fname: userEmail.fname,
          lname: userEmail.lname,
          email: userEmail.email,
          password: userEmail.password,
          // image: userEmail.image
        }
        return res.status(201).json({ message: "Login successfully!", alert: true, dataSend })
      } else {
        return res.status(201).json({ message: "username and password incorrect", alert: false })
      }
    } else {
      return res.status(201).json({ message: "username cannot find", alert: false })
    }

  } catch (error) {
    return res.status(402).json({ message: "error while login", error })
  }
}

export const addProduct = async (req, res) => {
  console.log(req.body)
  try {
    const image = req.file ? req.file.filename : null;
    console.log(image)
    const { name, description, price, category } = req.body
    // console.log(name, description)

    const product = new Product({
      name,
      category,
      image, 
      price,
      description
    })
    // console.log(product)
    await product.save()

    return res.status(201).json({ message: "product successfully added", alert: true })
  } catch (error) {
    return res.status(201).json({ message: "Didn't add product!", alert: false })
  }
}

export const fetchData = async (req, res) => {
  try {
    const dataFetch = await Product.find({})
     console.log(dataFetch)
    res.status(201).json(dataFetch)
  } catch (error) {
    return res.status(404).json({ message: "Error while fetch data from backend" })
  }
}