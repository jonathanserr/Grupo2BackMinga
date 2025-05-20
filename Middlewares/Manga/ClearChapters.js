//Este middleware elimina los chapters que estan asociados al manga que se quiera elimiar 
import Chapter from "../../models/Chapter.js";

const deleteChapters = async (req,res, next)=>{
    try {
        const idManga = req.params.idmanga
          await Chapter.deleteMany({ manga_id: idManga });   
          
          next()
    } catch (error) {
        next(error)
    }
}

export default deleteChapters