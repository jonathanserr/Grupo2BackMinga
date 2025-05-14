import User from "../../models/User.js"


const register  = async (req,res,next)=>{
    try {
        
        let userInfo = req.body
        console.log("hola");
        let createUser = await User.create(userInfo)
        return res.status(201).json({
            response: createUser,
            message : "User created succesfuly"
        })   
        
    } catch (error) {
        next(error)
    }
}

export default register