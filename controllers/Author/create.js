import Author from "../../models/Author.js"

const  createAuthor = async (req, res, next)=>{
    try {
        let newAuthor = await Author.create(req.body)
        res.status(201).json({
            success: true,
            author: newAuthor
        })
        res.send("Create atuhor")
    } catch (error) {
        next(error)
    }
}

export default createAuthor