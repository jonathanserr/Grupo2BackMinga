import Chapter from "../../models/Chapter.js"

const DeleteChapter = async (req,res,next)=>{
    try {
        let deleteCh = await Chapter.deleteOne({_id:req.body._id})
        return res.status(200).json({
            response: deleteCh,
            message: "Chapter deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default DeleteChapter