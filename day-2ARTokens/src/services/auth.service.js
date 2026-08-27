import bcrypt from "bcryptjs"
import userModel from "../models/user.model.js"
import generateTokens from "../utils/generateTokens.js"


const RegisterService = async (data) => {
    try {

       const {username,email,password} = data;

        if (!username || !email || !password) {
            res.status(400).json({ message: "all fields are required" })
        }


        const isUserExist = await userModel.findOne({ email })

        if (isUserExist) {
            return res.status(409).json({ message: "user already exist" })
        }


        const hashPass = await bcrypt.hash(password, 10);


        const NewUser = await userModel.create({
            username,
            email,
            password: hashPass
        })

        const accessToken = generateTokens.generateAccessToken(NewUser._id);

        const refreshToken = generateTokens.generateRefreshToken(NewUser._id);


        return {
            accessToken,refreshToken,NewUser
        }

    } catch (error) {
        throw new Error(error)
    }
}

export default {RegisterService}