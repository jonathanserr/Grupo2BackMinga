const createReaction = async (req,res,next)=>{
    try {
        
        let respuesta = "createReaction "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default createReaction