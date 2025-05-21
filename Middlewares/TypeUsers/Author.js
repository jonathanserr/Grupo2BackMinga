import User from "../../models/User.js"

const updateRolUserAuthor = async (req, res, next)=>{
    
 await User.findOneAndUpdate( { _id: req.user._id}, { role: 1 }, { new: true });
    next()
}


export default updateRolUserAuthor