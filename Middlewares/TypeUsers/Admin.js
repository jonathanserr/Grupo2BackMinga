const adminRole = async (req, res, next) => {
  try {
    const roleUser = req.user.role;

    console.log(roleUser);
    if (roleUser === 3) {
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "You don't have permission to access this endpoint",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default adminRole;
