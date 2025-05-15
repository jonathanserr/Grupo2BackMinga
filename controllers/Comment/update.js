const UpdateComment = async (req,res,next)=>{
    try {
        
        let respuesta = "UpdateComment "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default UpdateComment