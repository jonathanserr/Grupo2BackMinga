const getCompanies = async (req,res,next)=>{
    try {
        
        let respuesta = "getCompanies "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default getCompanies