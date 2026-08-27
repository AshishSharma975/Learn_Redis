import authService from "../services/auth.service.js";

const registerController = async (req, res) => {

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
}

const loginController = async (req, res) => {

}

export {
    registerController,
    loginController
}
