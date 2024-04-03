import mongoose from "mongoose";

const Connection = async () => {
    const URL = process.env.MONGOOSE_URL;

    try{
        await mongoose.connect(URL)
        console.log("----Connection successfully-----")
    }catch(error){
     console.log("Error while connecting mongoose database", error)
    }
}

export default Connection