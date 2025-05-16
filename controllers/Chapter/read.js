import Chapter from "../../models/Chapter.js"

const getChapters = async (req,res,next)=>{
    try {
        let {id}= req.query
        let query = {}
        if (id) {
            query._id = id
        }
        let all = await Chapter.find(query)

        return res.status(200).json({
            response: all,
            message: "Chapters fetched successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default getChapters