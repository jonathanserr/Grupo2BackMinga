import Category from "../../models/Category.js"

const getCategory = async (req,res,next)=>{
    try {
    
        const dataCategory = await Category.find()

        res.status(200).json(
            {
                succes: true, 
                responde: dataCategory
            }
        )
        
    } catch (error) {
        next(error)
    }
}

export default getCategory