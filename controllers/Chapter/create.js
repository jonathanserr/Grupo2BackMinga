const createChapter = async (req,res,next)=>{
    try {
        
        let respuesta = "createChapter "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default createChapter