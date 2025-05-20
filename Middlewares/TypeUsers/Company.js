import User from "../../models/User.js"

const updateRolUserCompany = async (req, res, next)=>{
    
 await User.findOneAndUpdate( { _id: req.user._id}, { role: 2 }, { new: true });
    next()
}

export default updateRolUserCompany