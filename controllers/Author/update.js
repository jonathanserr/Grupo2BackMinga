import Author from "../../models/Author.js"

const UpdateAuthor = async (req,res,next)=>{
    try {
        
       const idauthor = req.params.idauthor

       const data = req.body
       
         const updatedAuthor = await Author.findOneAndUpdate(
            { _id: idauthor },
            data,
            { new: true }
        );

        res.status(200).json(
            {
                succes:true, 
                response: updatedAuthor
            }
        )

    } catch (error) {
        next(error)
    }
}

export default UpdateAuthor