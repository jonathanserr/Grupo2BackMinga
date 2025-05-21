import Chapter from "../../models/Chapter.js"

const createChapter = async (req,res,next)=>{
    try {

        const idmanga = req.params.idmanga
        
        const dataBody = req.body
        const data = {
            "manga_id": idmanga,
            "title": dataBody.title,
            "pages": dataBody.pages,
            "order": dataBody.order
        }

        const newChapter = await Chapter.create(data)

        res.status(201).json(
            {
                succes: true, 
                response: newChapter
            }
        )
        
    } catch (error) {
        next(error)
    }
}

export default createChapter