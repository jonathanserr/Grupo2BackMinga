import User from "../../../models/User.js"
import Author from "../../../models/Author.js"
import Company from "../../../models/Company.js"

const verifyActive = async (req,res,next)=>{

    try {
        const emailUser = req.body.email

    const user = await User.findOne({email: emailUser})

    const roleUser = user.role
    const idUser = user._id

    if(roleUser === 1){
    
        const author = await Author.findOne({user_id: idUser})
        
        const active = author.active

        if(active){
            next()
        }else{
            return res.status(401).json(
                {
                    succes:false,
                    message: "Login Failed, Your user is disactivated, contact with Admin"
                }
            )
        }

    }else if (roleUser === 2){
         const company = await Company.findOne({user_id: idUser})
        const active = company.active

        if(active){
            next()
        }else{
            return res.status(401).json(
                {
                    succes:false,
                    message: "Login Failed, Your user is disactivated, contact with Admin"
                }
            )
        }
    } else if (roleUser ===3){
        next()
    }else if( roleUser === 0){
        next()
    }  
    } catch (error) {
        next(error)
    }

}

export default verifyActive