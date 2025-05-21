import Reaction from "../../models/Reaction.js";
import Manga from "../../models/Manga.js";
import Favorites from "../../models/Favorites.js";

const createReaction = async (req, res, next) => {
  try {
    const { idmanga } = req.params;
    const { reaction } = req.body;
    const userField = req.userField;         // "author_id" o "company_id"
    const realId = req.userEntityId;         // ID del autor o compañía

    const filterFav = {
      manga_id: idmanga,
      [userField]: realId
    };

    const existing = await Reaction.findOne({
      manga_id: idmanga,
      [userField]: realId,
    });

    if (existing) {
      if (existing.reaction === reaction) {
        // Toggle off
        await existing.deleteOne();

        await Manga.updateOne(
          { _id: idmanga, "reaction.id": reaction },
          { $inc: { "reaction.$.count": -1 } }
        );

        // Si era un like, eliminar de favoritos si existe
        if (reaction === 1) {
          await Favorites.deleteOne(filterFav);
        }

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

        // Si el nuevo es like, agregar a favoritos (si no existe)
        if (reaction === 1) {
          const alreadyFavorite = await Favorites.findOne(filterFav);
          if (!alreadyFavorite) {
            await Favorites.create(filterFav);
          }
        } else {
          // Si el anterior era like, eliminar de favoritos
          if (old === 1) {
            await Favorites.deleteOne(filterFav);
          }
        }

        return res.status(200).json({
          success: true,
          message: "Reaction updated successfully"
        });
      }
    }

    // No existía reacción previa → crear nueva
    await Reaction.create({
      manga_id: idmanga,
      [userField]: realId,
      reaction,
    });

    await Manga.updateOne(
      { _id: idmanga, "reaction.id": reaction },
      { $inc: { "reaction.$.count": 1 } }
    );

    // Si es un like, añadir a favoritos
    if (reaction === 1) {
      const alreadyFavorite = await Favorites.findOne(filterFav);
      if (!alreadyFavorite) {
        await Favorites.create(filterFav);
      }
    }

    return res.status(201).json({
      success: true,
      message: "Reaction created successfully"
    });

  } catch (error) {
    next(error);
  }
};

export default createReaction;
