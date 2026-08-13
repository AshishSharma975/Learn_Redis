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
app.get("/user/:id", async (req, res) => {
    try {
        const userFromCache = await redis.get(`user:${req.params.id}`)
        if(userFromCache){
            return res.status(200).json({
                message:"fetched the user from the cache",
                user:JSON.parse(userFromCache)
            })
        }
        const users = await User.findOne({
            _id: req.params.id
        })
        await redis.set(`user:${req.params.id}`, JSON.stringify(users),"EX",3600)
        return res.status(200).json({
            message:"fetched the user from the database",
            user:users
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

app.post("/user", async (req,res)=>{
    try{
        const user=await User.create({
            name:req.body.name,
            email:req.body.email
        })
        return res.status(201).json({
            message:"user created successfully",
            user:user
        })
    }catch(error){
        return res.status(500).json({ message: error.message })
    }
})


const connectToMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
        await User.collection.dropIndexes().catch(() => {})
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