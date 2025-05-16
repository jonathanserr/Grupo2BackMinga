import Category from "../../models/Category.js";

const getCategory = async (req, res, next) => {
    try {
        let { name } = req.query;
        let query = {}

        if (name) {
            name = name.trim()
            query.name = { $regex: name, $options: 'i' }
        }

        let all = await Category.find(query)
        return res.status(200).json({
            response: all,
            message: "Category fetched successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default getCategory