import jwt from 'jsonwebtoken'

export default (req,res,next) => {   
    const token = jwt.sign(
        {email: req.user.email},
        process.env.SECRET,
        {expiresIn: "1h"}    
    )
   
    req.token = token
    next()
}

