const updateReaction = async (req,res,next)=>{
    try {
        
        let respuesta = "updateReaction "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default updateReaction