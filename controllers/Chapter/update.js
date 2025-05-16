import Chapter from "../../models/Chapter.js"

const UpdateChapters = async (req, res, next) => {
    try {
        const { _id, ...updates } = req.body;
        const info = {
            ...(updates.title && { title: updates.title }),
            ...(updates.cover_photo && { cover_photo: updates.cover_photo }),
            ...(updates.pages && { pages: updates.pages }),
            ...(updates.order && { order: updates.order })
        };

        const update = await Chapter.updateOne(
            { _id },
            { $set: info }
        );
        return res.status(200).json({
            response: update,
            message: "Chapter updated successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default UpdateChapters