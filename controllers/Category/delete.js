import Category from "../../models/Category.js";

const DeleteCategory = async (req, res, next) => {
    try {
        let deleteCategory = await Category.deleteOne(
            { _id: req.body._id }
        )
        return res.status(200).json({
            response: deleteCategory,
            message: "Category deleted successfully"
        }) 
    } catch (error) {
        next(error)
    }
}

export default DeleteCategory