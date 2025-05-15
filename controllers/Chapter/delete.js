const DeleteChapter = async (req,res,next)=>{
    try {
        
        let respuesta = "DeleteChapter "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default DeleteChapter