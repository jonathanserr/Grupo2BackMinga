import bcryptjs from "bcryptjs";

export default (req,res,next)=>{
    let password = req.body.password
    
    let hashPass = bcryptjs.hashSync(
        password,
        10
    )
    req.body.password = hashPass
    next()
}

