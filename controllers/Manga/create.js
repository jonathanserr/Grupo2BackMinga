import Manga from "../../models/Manga.js"
const createManga = async (req,res,next)=>{
    try {

        const { author_id, company_id } = req.query;
        const filterCreador = {};

        if (author_id) {
            filterCreador.author_id = author_id;
        } else if (company_id) {
            filterCreador.company_id = company_id;
        }

        const dataBody = req.body

        const dataManga = {
            "author_id": filterCreador.author_id,
            "company_id": filterCreador.company_id,
            "title":dataBody.title,
            "cover_photo": dataBody.cover_photo,
            "description": dataBody.description,
            "category_id": dataBody.category_id
        }
        
        const newManga = await Manga.create(dataManga)

        res.status(201).json(
            {
                succes:true, 
                response: newManga
            }
        )

    } catch (error) {
        next(error)
    }
}

export default createManga