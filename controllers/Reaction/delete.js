import Reaction from "../../models/Reaction.js"

const deleteReaction = async (req,res,next)=>{
    try {
        let deleteRe = await Reaction.deleteOne({_id:req.params.id})
        return res.status(200).json({
            response: deleteRe,
            message: "Reacction deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default deleteReaction