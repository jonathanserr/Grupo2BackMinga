import Category from "../../models/Category.js"

const createCategory = async (req,res,next)=>{
    try {
        const admindId = req.user.id
        const dataBody = req.body

        const dataCategory= {
            "name": dataBody.name,
            "color": dataBody.color,
            "hover": dataBody.hover,
            "description": dataBody.description,
            "cover_photo": dataBody.cover_photo,
            "character_photo": dataBody.character_photo,
            "admin_id": admindId
        }

        const newCategory = await Category.create(dataCategory)

        return res.status(200).json(
            {
                succes: true, 
                response: newCategory
            }
        )
        
        
    } catch (error) {
        next(error)
    }
}

export default createCategory