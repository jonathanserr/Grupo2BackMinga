const DeleteAuthor = async (req,res,next)=>{
    try {
        
        let respuesta = "Delete auhtores"
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default DeleteAuthor