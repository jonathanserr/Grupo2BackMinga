const getReactions = async (req,res,next)=>{
    try {
        
        let respuesta = "getReactions "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default getReactions