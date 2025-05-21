import Manga from "../../models/Manga.js"
import Category from "../../models/Category.js"
import Author from "../../models/Author.js"
import Company from "../../models/Company.js"

const getManga = async (req, res, next) => {
    try {

        const getMangas = await Manga.find().populate("category_id").populate("author_id").populate("company_id")

        return res.status(200).json({
            succes: true,
            response: getMangas
        })

    } catch (error) {
        next(error)
    }
}

const getMangaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        
        const manga = await Manga.findById(id)
            .populate("category_id")
            .populate("author_id")
            .populate("company_id");
        
        
            return res.status(200).json({
                success: true,
                response: manga
            })
    } catch (error) {
        next(error)
        
    }
}

const getMangaByAuthororCompany = async (req, res, next)=>{

    try {

        const typeUser = req.userField ;

        const idtype = req.userEntityId;

        const mangas = await Manga.find({[typeUser]: idtype}).populate("author_id").populate("company_id").populate("category_id")

        res.status(200).json(
            {
                succes:true,
                response: mangas
            }
        )

    } catch (error) {
        next(error)
    }
}

export { getManga, getMangaByAuthororCompany, getMangaById}