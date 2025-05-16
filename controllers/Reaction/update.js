import Reaction from "../../models/Reaction.js"

const updateReaction = async (req,res,next)=>{
    try {
        const update = await Reaction.updateOne(
            { _id: req.body._id },
            { reaction: req.body.reaction }
        );
        return res.status(200).json({
            response: update,
            message: "Reaction updated successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default updateReaction