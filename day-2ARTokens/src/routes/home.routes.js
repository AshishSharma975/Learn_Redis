import express from "express"
import authMiddleware from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {

    const user = req.user;

    return res.status(200).json({
        message: "Home fetched successfully",
        user
    })
})

export default router;