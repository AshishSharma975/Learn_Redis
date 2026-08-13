import "dotenv/config"
import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import Redis from "ioredis"
import { User } from "./models/user.model.js"

const app = express()

//middlewares
app.use(express.json())
app.use(morgan("dev"))

//route
app.get("/users", async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


const connectToMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB")
    }catch(error){
        console.log(error.message)
        process.exit(1)
    }

}

const redis = new Redis(process.env.REDIS_URI)

redis.once("ready", () => {
    console.log("Connected to Redis")
})

connectToMongoDB()

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000")
})