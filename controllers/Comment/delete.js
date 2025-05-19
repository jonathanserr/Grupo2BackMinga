import Comment from "../../models/Comment.js"

const DeleteComment = async (req,res,next)=>{
    try {
         const idComment = req.params.idcomment

        
        await Comment.deleteOne({_id: idComment})
        
        res.status(200).json(
            {
                succes:true,
                response:"Deleted succesfuly"
            }
        )
    } catch (error) {
        next(error)
    }
}

export default DeleteComment