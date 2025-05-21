import Comment from "../../models/Comment.js";

const DeleteComment = async (req, res, next) => {
  try {
    const idComment = req.params.idcomment;

    const comment = await Comment.deleteOne({ _id: idComment });

    if (!comment) {
      return res.status(404).json({
        success: false,
        response: "Comment not found",
      });
    }

    res.status(200).json({
      succes: true,
      response: "Deleted succesfuly",
    });



   
  } catch (error) {
    next(error);
  }
};

export default DeleteComment;
