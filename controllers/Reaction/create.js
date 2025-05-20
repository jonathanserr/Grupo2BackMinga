import Reaction from "../../models/Reaction.js";
import Manga    from "../../models/Manga.js";
import Author   from "../../models/Author.js";
import Company  from "../../models/Company.js";

const getFieldByUserType = (role) => {
  switch (role) {
    case 1: return "author_id";
    case 2: return "company_id";
    default: return "user";   // para usuarios “normales”
  }
};

const createReaction = async (req, res, next) => {
  try {
    const { idmanga }    = req.params;
    const { reaction }   = req.body;
    const userField      = req.userField;  // "author_id" o "company_id"
    const realId         = req.userEntityId; // id del autor o compañía

    // 2) Comprobar si ya existe una reacción previa de este “realId”
    const existing = await Reaction.findOne({
      manga_id: idmanga,
      [userField]: realId,
    });

    // 3) Toggle off / cambio / creación
    if (existing) {
      if (existing.reaction === reaction) {
        // Toggle off
        await existing.deleteOne();
        await Manga.updateOne(
          { _id: idmanga, "reaction.id": reaction },
          { $inc: { "reaction.$.count": -1 } }
        );
        return res.status(200).json({
          success: true,
          message: "Reaction removed (toggle off)"
        });
      } else {
        // Cambio de reacción
        const old = existing.reaction;
        existing.reaction = reaction;
        await existing.save();

        await Manga.updateOne(
          { _id: idmanga, "reaction.id": old },
          { $inc: { "reaction.$.count": -1 } }
        );
        await Manga.updateOne(
          { _id: idmanga, "reaction.id": reaction },
          { $inc: { "reaction.$.count": 1 } }
        );

        return res.status(200).json({
          success: true,
          message: "Reaction updated successfully"
        });
      }
    }

    // 4) Crear nueva reacción
    await Reaction.create({
      manga_id: idmanga,
      [userField]: realId,
      reaction,
    });

    await Manga.updateOne(
      { _id: idmanga, "reaction.id": reaction },
      { $inc: { "reaction.$.count": 1 } }
    );

    return res.status(201).json({
      success: true,
      message: "Reaction created successfully"
    });

  } catch (error) {
    next(error);
  }
};

export default createReaction;
