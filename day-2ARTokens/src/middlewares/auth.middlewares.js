import jwt from "jsonwebtoken"
import UserModel from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            return res.status(401).json({
                message: "unauthorized: access token not found"
            })
        }

        let decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET)

        if (!decoded) {
            return res.status(401).json({
                message: "unauthorized: invalid access token"
            })
        }

        const user = await UserModel.findById(decoded.id).select("-password")

        if (!user) {
            return res.status(404).json({
                message: "unauthorized: user not found"
            })
        }

        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({
            message: error.message || "unauthorized"
        })
    }
}

export default authMiddleware;