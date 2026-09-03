import authService from "../services/auth.service.js";

const registerController = async (req, res) => {
    try {
        const { accessToken, refreshToken, NewUser } = await authService.RegisterService(req.body)

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        })

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 10 * 60 * 1000
        })

        if (!NewUser) {
            return res.status(500).json({ message: "User is not registered" })
        }

        return res.status(201).json({ message: "User registered successfully", NewUser })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const loginController = async (req, res) => {
    try {
        const { accessToken, refreshToken, isUserExist } = await authService.LoginService(req.body)

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,   
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        })

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 60 * 1000
        })

        if (!isUserExist) {
            return res.status(500).json({ message: "User is not logged in" })
        }

        return res.status(200).json({ message: "User logged in successfully", isUserExist })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const getAccessTokenController = async (req, res) => {
    try {
        const refreshToken = req.cookies?.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({
                message: "unauthorized request"
            })
        }

        const accessToken = await authService.getAccessTokenService(refreshToken);

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 10 * 60 * 1000
        })

        return res.status(200).json({
            message: "Access token generated"
        })
    } catch (error) {
        return res.status(401).json({
            message: error.message || "unauthorized"
        })
    }
}

const getMeController =(req,res) =>{
    return res.status(200).json({
        messsage:"currently logged in user ",
        isUserExist:req.user
    })
}

export {
    registerController,
    loginController,
    getAccessTokenController,
    getMeController
}
