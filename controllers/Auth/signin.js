import User from "../../models/User.js"

export default async (req,res,next) => {

    try {
       const user =  await User.findOneAndUpdate(
            {email: req.user.email},
            {online: true},
            { new: true, projection: "-password" }
        )
        return res.status(200).json({
            success:true,
            message: "Signed In",
            token: req.token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                lastname: user.lastname,
                urlPhoto: user.urlPhoto,
                country: user.country,
                online: user.online
              },
        })
    } catch (error) {
        next(error)
    }
}
