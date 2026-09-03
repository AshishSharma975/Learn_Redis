import express from "express";
import { getAccessTokenController, getMeController, loginController, registerController } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middlewares.js";


const router = express.Router();

router.get("/me",authMiddleware,getMeController)

router.get("/get-accessToken", getAccessTokenController)

router.post("/register",registerController)
router.post("/login",loginController)


export default router