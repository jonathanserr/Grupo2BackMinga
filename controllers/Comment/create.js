import Comment from "../../models/Comment.js"

const createComment = async (req,res,next)=>{
    try {
        
        let respuesta = "createComment "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default createComment