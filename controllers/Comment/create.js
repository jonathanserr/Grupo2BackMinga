import Comment from "../../models/Comment.js"

const createComment = async (req,res,next)=>{
    try {
        const role = req.user.role
        const idChapter = req.params.idchapter
        const {message} = req.body

        if(role === 1){
            const author_id = req.userEntityId

            const data = {
                "chapter_id": idChapter,
                "author_id": author_id,
                "message": message
            }

            const newComment = await Comment.create(data)

            res.status(201).json(
                {
                    succes:true, 
                    message: newComment
                }
            )
        }else if(role === 2){
            const company_id = req.userEntityId
            const data = {
                "chapter_id": idChapter,
                "company_id": company_id,
                "message": message
            }
            const newComment = await Comment.create(data)

            res.status(201).json(
                {
                    succes:true, 
                    message: newComment
                }
            )
        }  
    } catch (error) {
        next(error)
    }
}

export default createComment