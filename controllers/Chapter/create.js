import Chapter from "../../models/Chapter.js"

const createChapter = async (req,res,next)=>{
    try {
        let createChapter = await Chapter.create(req.body)
        return res.status(201).json({
            response: createChapter,
            message: "Chapter created successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default createChapter