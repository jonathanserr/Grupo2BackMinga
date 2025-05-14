import User from "../../models/User.js"


const register  = async (req,res,next)=>{
    try {
        console.log("llegué acá")
        let userInfo = req.body
        console.log(userInfo);
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