
export default async (req, res, next) => {
    try {
        console.log("user inyectado por passport");
        
        console.log(req.user);
        
    return res.status(200).json({
        success: true,
        message: "Token valido",
        user: {
        id: req.user._id,
        email: req.user.email,
        name: req.user.name,
        photo: req.user.photo,
        role: req.user.role,
        online: req.user.online
        
        }        
    });
    } catch (error) {
    next(error);

    }
}