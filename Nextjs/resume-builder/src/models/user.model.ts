import { IUser } from "@/types/user.types";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema<IUser>({
    name:{
        type:String,
        trim:true,
        required:[ true , "Name is required"]
    },
    email:{
        type:String,
        trim:true,
        required:[ true , "Email is required"]
    },
    password:{
        type:String,
        required:[ true , "Password is required"],
        minLength:[6 , "Password must be at least 6 characters long"]
    },
    mobile:{
        type:String,
        required:false,
        minLength:[10 , "Mobile number must be at least 10 digits long"],
        maxLength:[10 , "Mobile number must be at most 13 digits long"]
    }
})

const User = mongoose.models.User || mongoose.model("User",userSchema);

export default User;