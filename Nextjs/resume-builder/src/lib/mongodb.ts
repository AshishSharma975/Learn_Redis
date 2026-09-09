import mongoose from "mongoose";

const connectDB = ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI!)
        console.log("Successfully connected to database")
    }catch(error){
        console.log("Error in database connection",error)
    }
}

export default connectDB;