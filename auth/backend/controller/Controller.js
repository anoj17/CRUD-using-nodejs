
import User from '../schema/Schema.js'

export const signUp = async (req, res) =>{
    const {name, email, password} = req.body
    const hashPassword = bcryptjs.hashSync(password, 10)
   try{
     const user = new User({
       name,
       email,
       password: hashPassword
     })
     await user.save()
     res.status(201).json({ message: "user signup successfully!", alert: true})
   }
   catch(error){
    res.status(200).json({ message: "user cannot signup!", alert: false})
   }
}