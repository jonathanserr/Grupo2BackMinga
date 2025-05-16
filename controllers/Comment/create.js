import Comment from "../../models/Comment.js"

const createComment = async (req,res,next)=>{
    try {
        let create = await Comment.create(req.body)
        return res.status(201).json({
            response: create,
            message: "Comment created successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default createComment