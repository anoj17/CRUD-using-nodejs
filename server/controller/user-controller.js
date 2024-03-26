import User from '../schema/user-schema.js'

export const addUser = async (request, response) => {

  const { name, email, phoneNumber, username } = request.body;
  if (name === '') {
    return response.status(422).json({ message: "name is required" })
  }
  if (email === '') {
    return response.status(422).json({ message: "email is required" })
  }
  if (username === '') {
    return response.status(422).json({ message: "username is required" })
  }
  if (phoneNumber === '') {
    return response.status(422).json({ message: "number is required" })
  }
  const user = new User({ email, name, username, phoneNumber })
  await user.save()
   response.status(201).json({ message: "user creted", user })
}

export const getUser = async (req, res) => {
  try {
    const data = await User.find({})
    res.status(200).json(data)
  } catch (error) {
    res.status(404).json({ message: "error data cannot find" })
  }
}

export const getUserId = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ message: "error data cannot find" })
  }
}

export const editUser = async (req, res) => {
  let user = req.body;
  // const edituser = new User(user)
  try {
    console.log(req.params.id)
   const editUser = await User.findOneAndUpdate({
    _id: req.params.id
   },{
    ...req.body
   },{
    new: true
   })
     if(!editUser){
      res.status(404).json({ message: "User not found"})
     }
    //  await editUser.save()
    res.status(201).json({ message: "edit user data" })
  } catch (error) {
    console.log(error)
    res.status(409).json({ message: "cannot edit user data" })
  }
}

export const deleteUser = async (req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.params.id })
  } catch (error) {
    res.status(201).json({ message: "cannot delete user" })
  }
}