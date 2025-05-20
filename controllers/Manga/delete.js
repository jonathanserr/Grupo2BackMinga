import Manga from "../../models/Manga.js"
const deleteManga = async (req,res,next)=>{
    try {

        const idManga = req.params.idmanga

       //Este deleteManga tambien eliminara todos los capitulos relacionados con él,seria la logica correcta que al eliminar un manga se eliminen sus capitulos

        await Manga.deleteOne({ _id: idManga });

        res.status(200).json(
            {
                succes: true, 
                response: "Manga eliminated succesfuly"
            }
        )
        
    } catch (error) {
        next(error)
    }
}

export default deleteManga