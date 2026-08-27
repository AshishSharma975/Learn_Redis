import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    refreshToken:{
        type: String,
    }
},{
    timestamps:true
});

const UserModel = mongoose.model("Users", userSchema);

export default UserModel;