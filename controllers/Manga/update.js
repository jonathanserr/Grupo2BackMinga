import Manga from "../../models/Manga.js";

const UpdateManga = async (req,res,next)=>{
    try {
        
        const idManga = req.params.idmanga

        const newInfo = req.body

        const newInfoManga = await Manga.findOneAndUpdate(
            { _id: idManga },
            newInfo,
            { new: true }
        );

        return res.status(200).json(
            {
                succes:true,
                message: "Updated succesfuly",
                respone: newInfoManga
            }
        )
        
    } catch (error) {
        next(error)
    }
}

export default UpdateManga