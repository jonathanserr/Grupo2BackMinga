import Manga from "../../models/Manga.js"
import Category from "../../models/Category.js"

const getManga = async (req,res,next)=>{
    try {
    
    const getMangas = await Manga.find().populate("category_id").populate("author_id")

    return res.status(200).json({
        succes: true, 
        response: getMangas
    })

    } catch (error) {
        next(error)
    }
}

export default getManga