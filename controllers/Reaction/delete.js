const deleteReaction = async (req,res,next)=>{
    try {
        
        let respuesta = "deleteReaction "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default deleteReaction