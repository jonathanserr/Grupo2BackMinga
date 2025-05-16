import Reaction from "../../models/Reaction.js"

const getReactions = async (req,res,next)=>{
    try {
        let {id}= req.query
        let query = {}
        if (id) {
            query._id = id
        }
        let all = await Reaction.find(query)

        return res.status(200).json({
            response: all,
            message: "Reaction fetched successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default getReactions