//Este middleware verifica que el usuario tenga los roles necesarios

const checkRole = async (req,res, next) =>{

    try {
        const roleUser = req.user.role

        if(roleUser === 1 || roleUser === 2 || roleUser === 0){
            next()
        }else{
             return res.status(401).json({
      success: false,
      message: "You don't have permission to access this endpoint",
    });

    }

   


    } catch (error) {
        next(error)
    }
}

export default checkRole