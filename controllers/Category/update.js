import Category from "../../models/Category.js"

const UpdateCategory = async (req,res,next)=>{
    try {
         const idCategory = req.params.idcategory;

        const newData = req.body

         const updatedCategory= await Category.findOneAndUpdate(
            { _id: idCategory },
            newData,
            { new: true }
        );

        res.status(200).json(
            {
                succes: true, 
                response: updatedCategory
            }
        )

    } catch (error) {
        next(error)
    }
}

export default UpdateCategory