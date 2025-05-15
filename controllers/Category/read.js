const getCategory = async (req,res,next)=>{
    try {
        
        let respuesta = "getCategory "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default getCategory