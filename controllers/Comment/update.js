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

      if (!updatedComment) {
      return res.status(404).json({
        success: false,
        response: "Comment not found",
      });
    }


    res.status(200).json({
      succes: true,
      response: updatedComment
    });
  } catch (error) {
    next(error);
  }
};

export default UpdateComment;
