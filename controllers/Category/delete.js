const DeleteCategory = async (req,res,next)=>{
    try {
        
        let respuesta = "DeleteCategory "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default DeleteCategory