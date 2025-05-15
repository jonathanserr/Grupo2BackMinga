const getComments = async (req,res,next)=>{
    try {
        
        let respuesta = "getComments "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default getComments