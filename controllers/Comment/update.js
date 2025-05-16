import Comment from "../../models/Comment.js"

const UpdateComment = async (req,res,next)=>{
    try {
        const update = await Comment.updateOne(
            { _id: req.body._id },
            { message: req.body.message }
        );
        return res.status(200).json({
            response: update,
            message: "Comment updated successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default UpdateComment