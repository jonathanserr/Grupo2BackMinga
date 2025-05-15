

const getAutor = async (req,res,next)=>{
    try {
        
        let respuesta = "Obtener autores"
        //Maqueta para luego implementar realmente
        res.send(respuesta)
    } catch (error) {
        next(error)
    }
}

export default getAutor