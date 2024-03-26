import mongoose from "mongoose";

const Connection = async () => {
    const URL = "mongodb+srv://foodstroe:anoj123@foodstore.e7utoqt.mongodb.net/"

    try{
        await mongoose.connect(URL)
        console.log("----Connection successfully-----")
    }catch(error){
     console.log("Error while connecting mongoose database", error)
    }
}

export default Connection