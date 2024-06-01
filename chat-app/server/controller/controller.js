import User from '../schema/Schema.js'
import { v2 as cloudinary } from 'cloudinary';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({
    cloud_name: 'dwmysdgoo',
    api_key: '735782391563281',
    api_secret: 'wFmQxNdwHRgwSpk8jWrTyQ98y8A'
});

export const signin = async (req, res) => {
    const { fname, lname, password, phone, profile } = req.body
    // console.log(req.body)
    try {

        const existNumber = await User.findOne({ phone: phone })

        const hashPassword = bcryptjs.hashSync(password, 10)

        // console.log(existNumber.phone)

        if (!existNumber) {
            if (profile) {
                const uploadRes = await cloudinary.uploader.upload(profile, {
                    upload_preset: "image_preset",
                    folder: "chat",
                });
                if (uploadRes) {
                    const user = new User({
                        fname,
                        lname,
                        profile: uploadRes.url,
                        password: hashPassword,
                        phone
                    })
                    await user.save()
                }
            }
            return res.status(200).json({ message: "signIn successfully!!", alert: true })
        }
        return res.status(201).json({ message: "user already exist", alert: false })

    } catch (error) {
        return res.status(400).json({ message: "signIn failed!!", alert: false })
    }
}

export const login = async (req, res) => {
    const { phone, password } = req.body 
    // console.log("password", password, phone)

    try {
        const validNumber = await User.findOne({ phone: phone });

        
        const allData = (await User.find()).filter((item) => {
            return item.phone != phone;
        });

        // console.log(allData)

        if (validNumber) {

            const comparePassword = bcryptjs.compareSync(password, validNumber.password)
            if (comparePassword) {
                const token = jwt.sign({ id: validNumber._id }, process.env.JWT_SECRET)

                const data = {
                    id: validNumber._id,
                    fname: validNumber.fname,
                    lname: validNumber.lname,
                    password: password,
                    profile: validNumber.profile,
                    phone: validNumber.phone
                }

                // console.log(data)

                return res.cookie('access_token', token, { httpOnly: true })
                    .status(200).json({ message: "login successfully!!", alert: true, data, allUser: allData })

            }
            return res.status(202).json({ message: "username and password incorrect", alert: false })
        }
        return res.status(202).json({ message: "username cannot find", alert: false })
    } catch (error) {
        return res.status(400).json({ message: 'login failed', alert: false })
    }
}

export const editProfile = async (req, res) => {
          const data = req.body
      try {
        // console.log(data.id)
        const editUserProfile = await User.findOneAndUpdate({
            _id: data.id
        }, {
            ...req.body
        }, {
            new: true
        })
        if (!editUserProfile) {
            return res.status(400).json({ message: 'user not found', alert: false })
        }
        res.status(201).json({ message: "successfully edit user profile", alert: true })
    } catch (error) {
        return res.status(400).json({ message: 'user not found', alert: false })
    }
}
