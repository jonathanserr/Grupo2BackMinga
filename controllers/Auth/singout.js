import User from "../../models/User.js";

export default async (req,res,next) => {
    console.log(req.user)
    try {
        await User.findOneAndUpdate(
            {email: req.user.email},
            {online: false}
        )
        return res.status(200).json({
            success:true,
            message: "Sign Out Correct",
            token: req.token
        })
    } catch (error) {
        next(error)
    }
}

