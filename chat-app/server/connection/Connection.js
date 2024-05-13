import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const URL = process.env.MONGOOSE_URL

const Connection = async () =>{
  try {
      await mongoose.connect(URL)
      console.log("Connection successfull!!!")
  } catch (error) {
    console.log("Error while connect with database")
  }
}

export default Connection
