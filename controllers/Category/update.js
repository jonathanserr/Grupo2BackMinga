import Category from "../../models/Category.js";

const UpdateCategory = async (req, res, next) => {
    try {
        const { _id, ...updates } = req.body;
        const categoryInfo = {
            ...(updates.name && { name: updates.name }),
            ...(updates.color && { color: updates.color }),
            ...(updates.hover && { hover: updates.hover }),
            ...(updates.description && { description: updates.description }),
            ...(updates.cover_photo && { cover_photo: updates.cover_photo }),
            ...(updates.character_photo && { character_photo: updates.character_photo })
        };

        const updateCategory = await Category.updateOne(
            { _id },
            { $set: categoryInfo }
        );
        return res.status(200).json({
            response: updateCategory,
            message: "Category updated successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default UpdateCategory