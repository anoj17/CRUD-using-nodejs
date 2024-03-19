import mongoose from "mongoose"

const Connection = async () => {
    const URL = `mongodb+srv://user:user1@crud.rug0hvi.mongodb.net/`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true })
        console.log("connection successfully*****")
    } catch (error) {
        console.log("error while connecting mongoose", error)
    }
}

export default Connection