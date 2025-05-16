import Category from "../../models/Category.js"

const createCategory = async (req,res,next)=>{
    try {
        let createCategory = await Category.create(req.body)
        return res.status(201).json({
            response: createCategory,
            message: "Category created successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default createCategory