const UpdateChapters = async (req,res,next)=>{
    try {
        
        let respuesta = "UpdateChapters "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default UpdateChapters