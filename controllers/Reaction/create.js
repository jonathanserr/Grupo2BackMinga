import Reaction from "../../models/Reaction.js"
import Manga from "../../models/Manga.js";

const getFieldByUserType = (type) => {
  if (type === "author") return "author_id";
  if (type === "company") return "company_id";
  if (type === "user") return "user";
  return null;
};

const getReactionName = (id) => {
  const names = {
    1: "like",
    2: "dislike",
    3: "awesome",
    4: "iloveyou",
  };
  return names[id] || "unknown";
};

const createReaction = async (req, res, next) => {
  try {
    const { idmanga } = req.params;
    const { reaction } = req.body; // tipo de reacción (número)
    const { quienreacciona, id } = req.query; // tipo de usuario e id

    const userField = getFieldByUserType(quienreacciona);
    if (!userField) {
      return res.status(400).json({ success: false, message: "Tipo de usuario inválido." });
    }

    // Buscar si ya existe una reacción previa del mismo usuario al mismo manga
    const existingReaction = await Reaction.findOne({
      manga_id: idmanga,
      [userField]: id,
    });

    if (existingReaction) {
      if (existingReaction.reaction === reaction) {
        // ✅ Toggle: misma reacción → eliminarla
        await Reaction.deleteOne({ _id: existingReaction._id });

        // Decrementar el contador en el modelo de Manga
        await Manga.updateOne(
          { _id: idmanga, "reaction.id": reaction },
          { $inc: { "reaction.$.count": -1 } }
        );

        return res.status(200).json({
          success: true,
          message: "Reacción eliminada (toggle)",
        });
      } else {
        // 🔄 Cambio de tipo de reacción
        const oldReaction = existingReaction.reaction;

        // Actualizar la reacción en el modelo Reaction
        existingReaction.reaction = reaction;
        await existingReaction.save();

        // Decrementar el contador de la anterior
        await Manga.updateOne(
          { _id: idmanga, "reaction.id": oldReaction },
          { $inc: { "reaction.$.count": -1 } }
        );

        // Incrementar el contador de la nueva
        await Manga.updateOne(
          { _id: idmanga, "reaction.id": reaction },
          { $inc: { "reaction.$.count": 1 } }
        );

        return res.status(200).json({
          success: true,
          message: "Reacción actualizada correctamente.",
        });
      }
    }

    // 🆕 Si no existe reacción previa, crearla
    const data = {
      manga_id: idmanga,
      [userField]: id,
      reaction,
    };

    await Reaction.create(data);

    // Incrementar el contador en Manga
    await Manga.updateOne(
      { _id: idmanga, "reaction.id": reaction },
      { $inc: { "reaction.$.count": 1 } }
    );

    return res.status(201).json({
      success: true,
      message: "Reacción creada exitosamente.",
    });

  } catch (error) {
    next(error);
  }
};

export default createReaction;
