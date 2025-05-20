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
        const { idmanga } = req.params;
        const manga = await Manga.findById(idmanga)
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

        const { authorId, companyId } = req.query;
        const filter = {};

        if (authorId) {
            filter.author_id = authorId;
        } else if (companyId) {
            filter.company_id = companyId;
        }

        const mangas = await Manga.find(filter).populate("author_id").populate("company_id")

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