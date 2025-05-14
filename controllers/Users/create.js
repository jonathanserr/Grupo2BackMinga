import user from "../../models/User.js";

const register = async (req, res, next) => {
    try {
        const newUser = new user(req.body);
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        next(error)
    }
};
export default register
