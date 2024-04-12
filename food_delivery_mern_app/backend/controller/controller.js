import { User, Product } from "../schema/schema.js"
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dwmysdgoo',
  api_key: '735782391563281',
  api_secret: 'wFmQxNdwHRgwSpk8jWrTyQ98y8A'
});

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
  // const image = req.file.filename
  const { name, description, image, price, category } = req.body
  try {

    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "image_preset",
        folder: "images",
      });

      if (uploadRes) {
        const product = new Product({
          name,
          category,
          image: uploadRes.url,
          price,
          description
        })
        console.log(uploadRes)
        await product.save()

        return res.status(201).json({ message: "product successfully added", alert: true })
      }
    }

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