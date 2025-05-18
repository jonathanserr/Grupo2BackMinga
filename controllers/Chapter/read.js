import { response } from "express"
import Chapters from "../../models/Chapter.js"

const getChapters = async (req,res,next)=>{

    try {
        
        const IdManga = req.params.IdManga

        const chaptersByManga = await Chapters.find({manga_id: IdManga})

        return res.status(200).json(
            {
                succes: true,
                response: chaptersByManga
            }
        )
        
    } catch (error) {
        next(error)
    }
}

export default getChapters