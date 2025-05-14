const error400 = (error,req,res,next) =>{
    console.log(error)
   if (error.status === 400){
    return res.status(400).json({
        succes: false, 
        message: "Una solicitud mal hecha bro",
        response: error
    })
    }
    next(error)
    
}

export default error400
