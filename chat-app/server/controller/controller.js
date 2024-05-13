import User from '../schema/Schema.js'
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dwmysdgoo',
    api_key: '735782391563281',
    api_secret: 'wFmQxNdwHRgwSpk8jWrTyQ98y8A'
});

export const signin = async (req, res) => {
    const { fname, lname, password, phone, profile } = req.body
    // console.log(req.body)
    try {
        if (profile) {
            const uploadRes = await cloudinary.uploader.upload(profile, {
                folder: "chat",
            });
            console.log(uploadRes)
            if(uploadRes){
                const user = new User({
                    fname,
                    lname,
                    profile: uploadRes.url,
                    password,
                    phone
                })
                await user.save()
            }
        }
    } catch (error) {

    }

}