const DeleteCompany = async (req,res,next)=>{
    try {
        
        let respuesta = "DeleteCompany "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default DeleteCompany