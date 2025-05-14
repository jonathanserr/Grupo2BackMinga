import user from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await user.findOneAndUpdate(
            { email: req.user.email },
            { online: false }
        );

        return res.status(200).json({
            success: true,
            message: "Signed Out successfully"
        });
    } catch (error) {
        next(error);
    }
};