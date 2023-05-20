import "dotenv/config"
import express, { urlencoded } from "express"
import mongoose from "mongoose"

const app = express()

app.use (express.json())
app.use (express.urlencoded({extended:true}))


mongoose.connect(process.env.URL_MONGODB_ATLAS)
    .then(() => console.log("DB is connected"))
    .catch((error) => console.log("Error en MongoDB Atlas:", error))

app.listen(process.env.PORT, ()=> {
    console.log("Server on port", process.env.PORT)
})
