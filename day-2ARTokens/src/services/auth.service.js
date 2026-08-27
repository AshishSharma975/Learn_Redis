import bcrypt from "bcryptjs"
import userModel from "../models/user.model.js"
import generateTokens from "../utils/generateTokens.js"


const RegisterService = async (data) => {
    try {

       const {username,email,password} = data;

        if (!username || !email || !password) {
            throw new Error("all fields are required")
        }


        const isUserExist = await userModel.findOne({ email })

        if (isUserExist) {
            throw new Error("user already exist")
        }


        const hashPass = await bcrypt.hash(password, 10);


        const NewUser = await userModel.create({
            username,
            email,
            password: hashPass
        })

        const accessToken = generateTokens.generateAccessToken(NewUser._id);

        const refreshToken = generateTokens.generateRefreshToken(NewUser._id);

        NewUser.refreshToken = refreshToken;
        await NewUser.save();

        return {
            accessToken,refreshToken,NewUser
        }

    } catch (error) {
        throw new Error(error.message || error)
    }
}

const LoginService = async(data)=>{
      try {

       const {email,password} = data;

        if (!email || !password) {
            throw new Error("all fields are required")
        }


        const user = await userModel.findOne({ email })

        if (!user) {
            throw new Error("user not exist")
        }


        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            throw new Error("Invalid credentials")
        }

        const accessToken = generateTokens.generateAccessToken(user._id);

        const refreshToken = generateTokens.generateRefreshToken(user._id);

        user.refreshToken = refreshToken;
        await user.save();

        const isUserExist = await userModel.findById(user._id).select("-password")

        return {
            accessToken, refreshToken, isUserExist
        }

    } catch (error) {   
        throw new Error(error.message || error)
    }
}

export default {RegisterService,LoginService}