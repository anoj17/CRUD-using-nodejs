import express from "express"
import Connection from "./database/db.js";
// import Router from "./router/route.js";
import cors from 'cors'
import { addUser, getUser, getUserId } from "./controller/user-controller.js";

const app = express()
app.use(cors())
app.use(express.json())


const PORT = 8000;

app.post("/add", addUser)
app.get("/all", getUser)
app.get("/:id", getUserId)

Connection()

app.listen(PORT, () => console.log(`express running on ${PORT}`))