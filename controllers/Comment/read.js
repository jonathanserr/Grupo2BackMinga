import Comment from "../../models/Comment.js"

const getComments = async (req,res,next)=>{
    try {
        let {id}= req.query
        let query = {}
        if (id) {
            query._id = id
        }
        let all = await Comment.find(query)

        return res.status(200).json({
            response: all,
            message: "Comment fetched successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default getComments