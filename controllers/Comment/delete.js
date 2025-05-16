import Comment from "../../models/Comment.js"

const DeleteComment = async (req,res,next)=>{
    try {
        let deleteCo = await Comment.deleteOne({_id:req.params.id})
        return res.status(200).json({
            response: deleteCo,
            message: "Comment deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default DeleteComment