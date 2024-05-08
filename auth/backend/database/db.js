import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

const Connection = async () =>{
   const url = process.env.MONGOOSE_URL

   try{
       await mongoose.connect(url)
       console.log("Database connect successfully")
   }catch{
      console.log("Error while connect database!!")
   }
}

export default Connection