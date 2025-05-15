const createManga = async (req,res,next)=>{
    try {
        
        let respuesta = "createManga "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default createManga