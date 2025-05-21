import { response } from "express"
import User from "../../models/User.js"

const validateIfUserHave = async (req,res,next) =>{

    try {
        const roleUser = req.user.role

        if (roleUser !== 0){
            return res.status(401).json(
                {
                    succes:false,
                    response: "Dont can Create Author or Company Because your user have one"
                }
            )
        }else{
            next()
        }

    } catch (error) {
        next(error)
    }
}

export default validateIfUserHave