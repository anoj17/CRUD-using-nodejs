import User from "../schema/schema.js"

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
      cpassword
    })

    await user.save()
    return res.status(201).json({ message: "User register successfully", alert: true })
  } catch (error) {
    return res.status(422).json({ message: "Error while saving data", error })
  }
}

export const loginUser = (req, res) => {
  console.log(req.body)
}