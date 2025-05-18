import Category from "../../models/Category.js"

const DeleteCategory = async (req,res,next)=>{
    try {
       const idCategory = req.params.idcategory;

      await Category.deleteOne({ _id: idCategory });

        res.status(200).json(
            {
                succes: true, 
                response: "Category eliminated succesfuly"
            }
        )
    } catch (error) {
        next(error)
    }
}

export default DeleteCategory