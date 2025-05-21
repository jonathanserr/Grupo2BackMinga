const error500 = (error,req,res,next) =>{
    return res.status(500).json({
        succes: false, 
        message: "Error inesperado en el servidor",
        response: error
    })
    
}

export default error500
