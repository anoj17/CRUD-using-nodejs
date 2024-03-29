import User from "../schema/schema.js"
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
        console.log(dataSend)
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