import express from "express"
const app = express()
import route from "./routes/router.js"
import cors from "cors"
import dbConnection from "./dbConnection.js"

dbConnection()

app.use(express.json())
app.use(cors({origin:"https://machine-test-ecommerce-hrf6.vercel.app"}))
app.get("/",route)

app.listen(5000,()=>{console.log("server listen in port 5000")})