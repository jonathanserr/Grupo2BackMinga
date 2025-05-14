import User from "../../../models/User.js"

export default async (req, res, next) => {

    try {
        let mail = req.body.email
        let account = await User.findOne({ email: mail })
      
        if (account) {
            return res.status(400).json({
                succes: false,
                message: "User alredy exists"
            })
        }
        next()
    } catch (error) {
        console.log("nos fuimos a error")
        next(error)
    }
} 

