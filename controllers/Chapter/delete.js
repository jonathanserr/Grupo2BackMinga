//Este middleware elimina los chapters que estan asociados al manga que se quiera elimiar 
import Chapter from "../../models/Chapter.js";

const deleteChapters = async (req,res, next)=>{
    try {
        const idChapter = req.params.idchapter
          await Chapter.deleteOne({ _id: idChapter });   
          
          return res.status(200).json(
            {
                succes: true, 
                response: "Chapter deleted Succesfuly"
            }
          )
    } catch (error) {
        next(error)
    }
}

export default deleteChapters