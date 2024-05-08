import express from "express"

import cors from 'cors'
import dotenv from 'dotenv'
import Connection from "./database/db.js"
import { signUp, signIn, googleData } from "./controller/Controller.js"

dotenv.config()

const app = express()
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(express.json())

app.post("/signup", signUp)
app.post("/signin", signIn)
app.post("/google", googleData)


const PORT = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    res.send("App running successfully!!")
})

Connection()


app.listen(PORT, () => console.log(`express running on ${PORT}`))