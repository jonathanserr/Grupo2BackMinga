import Author from '../../models/Author.js'
import "../../models/User.js"

//solo lo maneja el admin
let allAuthors = async (req, res, next) => {
    try {
        let authors = await Author.find()
       return res.status(200).json({
            success: true,
            authors: authors
        })
    } catch (error) {
        next(error)
    }
}


const authorById = async(req, res, next)=>{

    try {
       const idauthor = req.userEntityId

       console.log(req.userField)
       console.log(idauthor)

       const authorById = await Author.find({_id: idauthor})
        
       console.log(authorById)
       if(!authorById){
        res.status(401).json(
            {
                succes:false,
                message:"Author not found"
            }
        )
       }else{
            
       res.status(200).json(
        {
            succes:true,
            response: authorById
        }
       )
       }



    } catch (error) {
        next(error)
    }
}

export { allAuthors, authorById}
