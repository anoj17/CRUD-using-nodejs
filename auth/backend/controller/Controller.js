
import User from '../schema/Schema.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const signUp = async (req, res) => {
  const { name, email, password } = req.body
  const hashPassword = bcryptjs.hashSync(password, 10)

  try {

    const existEmail = await User.findOne({ email: email })

    if (existEmail) {
      return res.status(200).json({ message: "User already registered!", alert: false })
    }
    const user = new User({
      name,
      email,
      password: hashPassword
    })
    await user.save()
    return res.status(201).json({ message: "user signup successfully!", alert: true })
  }
  catch (error) {
    return res.status(200).json({ message: "user cannot signup!", alert: false })
  }
}

export const signIn = async (req, res) => {
  const { email, password } = req.body

  try {
    const validEmail = await User.findOne({ email })

    if (validEmail) {

      const validPassword = bcryptjs.compareSync(password, validEmail.password)

      if (validPassword) {

        const token = jwt.sign({ id: validEmail._id }, process.env.JWT_SECRET)

        const { password: hashPassword, ...user } = validEmail._doc


        res.cookie('access_token', token, { httpOnly: true })
        .status(200).json({ message: "login successfully!!", alert: true, user })

      } else {
        return res.status(400).json({ message: "username or password cannot match!!", alert: false })
      }
    } else {
      return res.status(400).json({ message: "username cannot find!!", alert: false })
    }
  } catch (error) {
    return res.status(400).json({ message: "oops something went wrong!!", alert: false })
  }
}

export const googleData = async (req,res) =>{
  console.log("Google hitted***",req.body)
}