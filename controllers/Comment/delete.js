const DeleteComment = async (req,res,next)=>{
    try {
        
        let respuesta = "DeleteComment "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default DeleteComment