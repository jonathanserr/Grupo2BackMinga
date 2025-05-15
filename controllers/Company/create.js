const createCompany = async (req,res,next)=>{
    try {
        
        let respuesta = "createCompany "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default createCompany