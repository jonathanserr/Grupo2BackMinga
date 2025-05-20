import Comment from "../../models/Comment.js";

const UpdateComment = async (req, res, next) => {
  try {
    const idComment = req.params.idcomment;
    const newData = req.body;

    const updatedComment = await Comment.findOneAndUpdate(
      { _id: idComment },
      newData,
      { new: true }
    );

    res.status(200).json({
      succes: true,
      response: updatedComment
    });
  } catch (error) {
    next(error);
  }
};

export default UpdateComment;
