import Company from "../../models/Company.js";
import Mangas from "../../models/Manga.js";
import Chapter from "../../models/Chapter.js";

const deleteInfoofCompany = async (req, res, next) => {
    try {
        const idCompany = req.params.idCompany;

       
        const mangasOfCompany = await Mangas.find({ company_id: idCompany });

       
        for (const manga of mangasOfCompany) {
           
            await Chapter.deleteMany({ manga_id: manga._id });

           
            await Mangas.findByIdAndDelete(manga._id);
        }

        
        next();
    } catch (error) {
        next(error)
    }
};

export default deleteInfoofCompany;
