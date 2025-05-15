const UpdateCompany = async (req,res,next)=>{
    try {
        
        let respuesta = "UpdateCompany "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default UpdateCompany