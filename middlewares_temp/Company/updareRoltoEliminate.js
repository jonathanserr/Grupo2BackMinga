//Este middleware reastura a 0 el rol del user cuando se elimina una compañia 
import User from "../../models/User.js"

const updateRol = async (req,res,next)=>{
    try {
        
        const idUser = req.user.id

        await User.findByIdAndUpdate(idUser, { role: 0 })

        next()
    } catch (error) {
        next(error)
    }
}

export default updateRol