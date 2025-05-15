const deleteManga = async (req,res,next)=>{
    try {
        
        let respuesta = "deleteManga "
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default deleteManga