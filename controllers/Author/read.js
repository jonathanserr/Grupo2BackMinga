import Author from '../../models/Author.js'
import "../../models/User.js"

//solo lo maneja el admin
let allAuthors = async (req, res, next) => {
    try {
        let authors = await Author.find()
       return res.status(200).json({
            success: true,
            authors: authors
        })
    } catch (error) {
        next(error)
    }
}

export { allAuthors}
