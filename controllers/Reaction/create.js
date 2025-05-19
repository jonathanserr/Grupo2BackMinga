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
    const { role, _id: userId } = req.user;

    // 1) Determinar el campo y la _id real según role
    const userField = getFieldByUserType(role);
    let realId;

    if (role === 1) {
      // Si es Author, buscamos el documento de Author cuyo campo `user` sea userId
      const author = await Author.findOne({ user_id: userId });
      if (!author) {
        return res.status(404).json({ success: false, message: "Author not found" });
      }
      realId = author._id;
    } else if (role === 2) {
      // Si es Company, buscamos el documento de Company
      const company = await Company.findOne({ user_id: userId });
      if (!company) {
        return res.status(404).json({ success: false, message: "Company not found" });
      }
      realId = company._id;
    } else {
      // Usuario normal
      realId = userId;
    }

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
