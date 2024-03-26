import express from "express"
import cors from "cors"
import { loginUser, signIn } from "./controller/controller.js"
import Connection from "./db/db.js"

const app = express()

app.use(cors())

app.use(express.json())

const PORT = 8000

app.get("/", (req, res) => {
    res.send("server is running")
})
app.post('/signin', signIn)
app.post("/login", loginUser)

Connection()

app.listen(PORT, () => console.log("App running on" + PORT))