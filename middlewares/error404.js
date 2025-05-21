const error404 = (req,res, next)=>{
    res.status(404).json({
        success: false, 
        message: "El servidor no encuentra el recurso solicitado. Puede ser porque la URL es incorrecta o el recurso ha sido eliminado."
    })
}

export default error404

