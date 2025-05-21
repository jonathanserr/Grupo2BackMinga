import Author from "../../models/Author.js"
 
const createAuthor = async (req, res, next) => {
    try {
        const dataUser = req.user._id
        const dataBody = req.body

        const data = {
            "name": dataBody.name,
            "last_name": dataBody.last_name,
            "city": dataBody.city,
            "country": dataBody.country,
            "date": dataBody.date,
            "photo": dataBody.photo,
            "user_id": dataUser
        }

        const author = await Author.create(data)

        return res.status(201).json(
            {
                succes: true,
                message: "Created Author correctly ",
                response: author
            }
        )

    } catch (error) {
        next(error)
    }
}

export default createAuthor