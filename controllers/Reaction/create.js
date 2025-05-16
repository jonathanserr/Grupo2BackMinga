import Reaction from "../../models/Reaction.js"

const createReaction = async (req,res,next)=>{
    try {
        let create = await Reaction.create(req.body)
        return res.status(201).json({
            response: create,
            message: "Comment created successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default createReaction