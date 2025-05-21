import Comment from "../../models/Comment.js";

const permisoDelete = async (req, res, next) => {
  try {
    const role = req.user.role;

    const idComment = req.params.idcomment;

    const comment = await Comment.findOne({ _id: idComment });

    if (!comment) {
      return res.status(404).json({
        success: false,
        response: "Comment not found",
      });
    }


    if (role === 1) {
      if (comment.author_id.equals(req.userEntityId)) {
        return next();
      }
    } else if (role === 2) {
      if (comment.company_id.equals(req.userEntityId)) return next();
    } else {
      return res.status(401).json({
        response: "No es tu comentario, no lo puedes eliminar",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default permisoDelete;
