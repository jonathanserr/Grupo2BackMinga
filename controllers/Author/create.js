import Author from "../../models/Author.js"

const  createAuthor = async (req, res, next)=>{
    try {
        // const data = req.body
        
        // const author = await Author.create(data)

        // return res.status(201).json(
        //     {
        //         succes: true,
        //         message: "Created Author correctly ",
        //         response: author
        //     }
        // )
        res.send("Create atuhor")
    } catch (error) {
        next(error)
    }
}

export default createAuthor