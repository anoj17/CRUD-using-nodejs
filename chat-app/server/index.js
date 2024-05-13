import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { signin } from "./controller/controller.js"
import Connection from "./connection/Connection.js"

dotenv.config()

const app = express()

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(express.json({ limit: '50mb'}))

app.post('/signin', signin)

const PORT = process.env.PORT || 8000

app.get("/", (req,res)=>{
    res.send("Server running")
})

Connection()

app.listen(PORT, ()=>{
    console.log("Server running",+PORT)
})