import Author from "../../models/Author.js"

const DeleteAuthor = async (req,res,next)=>{
    try {
        await Author.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "Author deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default DeleteAuthor