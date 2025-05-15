const UpdateManga = async (req,res,next)=>{
    try {
        
        let respuesta = "UpdateManga "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default UpdateManga