const getChapters = async (req,res,next)=>{
    try {
        
        let respuesta = "getChapters "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default getChapters