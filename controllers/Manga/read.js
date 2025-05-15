const getManga = async (req,res,next)=>{
    try {
        
        let respuesta = "getManga "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default getManga