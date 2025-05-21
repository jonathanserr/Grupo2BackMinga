import { response } from "express"
import Comments from "../../models/Comment.js"
import Chapter from "../../models/Chapter.js"
import Author from "../../models/Author.js"

const getComments = async (req,res,next)=>{
    try {
        const getComments = await Comments.find().populate("chapter_id").populate("author_id").populate("company_id")
        return res.status(200).json({
            succes:true,
            response: getComments
        })
    } catch (error) {
        next(error)
    }
}

export default getComments