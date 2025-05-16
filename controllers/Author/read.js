import Author from "../../models/Author.js"

const getAutor = async (req,res,next)=>{
    try {
        
       const getAuthor = await Author.find()

       res.status(200).json({
        succes: true ,
        response: getAuthor,
       })
    } catch (error) {
        next(error)
    }
}

export default getAutor