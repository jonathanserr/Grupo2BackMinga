import Author from "../../models/Author.js";

const DeleteAuthor = async (req, res, next) => {
  try {
    const idAuthor = req.params.idauthor;

    const result = await Author.deleteOne({ _id: idAuthor });

    res.status(200).json({ message: "Author successfully deleted" });
  } catch (error) {
    next(error);
  }
};

export default DeleteAuthor;
