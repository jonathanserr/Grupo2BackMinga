import Manga from "../../models/Manga.js"
const createManga = async (req,res,next)=>{
    try {
            //Aca se obtiene si es un author o compañia
          const typeUser = req.userField ;
        //Aca el id sea de author o compañia
        const idtype = req.userEntityId;
     
        const dataBody = req.body

        const dataManga = {
            [typeUser]: idtype,
            "title":dataBody.title,
            "cover_photo": dataBody.cover_photo,
            "description": dataBody.description,
            "category_id": dataBody.category_id,
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