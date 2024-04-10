import express from "express"
import cors from "cors"
import { addProduct, fetchData, loginUser, signIn } from "./controller/controller.js"
import Connection from "./db/db.js"
import dotenv from 'dotenv'
import path from 'path'
import multer from "multer"
dotenv.config()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

const app = express()

app.use('/uploads', express.static(path.join(__dirname,'uploads')))

app.use(cors({
    origin: 'https://food-delivery-frontend-alpha.vercel.app',
    // origin: "http://localhost:3000",
    credentials: true // If you need to send cookies or authorization headers
}));


app.use(express.json({ limit: "10mb" }))

const PORT = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.send("server is running on" + PORT)
})
app.post('/signin', signIn)
app.post("/login", loginUser)
app.post('/addProduct', upload.single('image'), addProduct)
app.get('/products', fetchData)

Connection()

app.listen(PORT, () => console.log("App running on" + PORT))