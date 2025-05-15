const createCategory = async (req,res,next)=>{
    try {
        
        let respuesta = "create Cateogry "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default createCategory