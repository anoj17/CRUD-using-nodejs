import express from "express"
import cors from "cors"
import { addProduct, fetchData, loginUser, signIn } from "./controller/controller.js"
import Connection from "./db/db.js"
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors({origin: ["https://food-delivery-frontend-2o0u3diml-budhathokianojs-projects.vercel.app"],methods: ["GET,POST"]}))

app.use(express.json({limit: "10mb"}))

const PORT = 8000

app.get("/", (req, res) => {
    res.send("server is running")
})
app.post('/signin', signIn)
app.post("/login", loginUser)
app.post('/addProduct', addProduct)
app.get('/products', fetchData)

Connection()

app.listen(PORT, () => console.log("App running on" + PORT))