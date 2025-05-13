
import user from "../../models/User.js"

export default async (req,res,next) => {

    try {
        await user.findOneAndUpdate(
            {email: req.body.email},
            {online: true} 
        )
        return res.status(200).json({

            success: true,
            message: "Singned In",
            token: req.token
        })
    } catch (error) {
        next(error)
    }
}