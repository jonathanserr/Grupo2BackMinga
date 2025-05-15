const UpdateCategory = async (req,res,next)=>{
    try {
        
        let respuesta = "UpdateCategory "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default UpdateCategory