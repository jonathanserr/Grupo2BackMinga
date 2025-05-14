import user from "../../models/User.js"


const register  = async (req,res,next)=>{
    try {
        
        res.send("Hola estas llamando al controller de registro")
        //Probando ruta
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default register