
export default async (req, res, next) => {
    try {
        console.log("user inyectado por passport");
        
        console.log(req.user);
        
    return res.status(200).json({
        success: true,
        message: "Token valido",
        user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        online: req.user.online,
        role: req.user.role
        }
    });
    } catch (error) {
    next(error);

    }
}