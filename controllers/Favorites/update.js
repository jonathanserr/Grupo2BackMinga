import Favorite from "../../models/Favorites.js";

const updateFavorites = async (req, res, next) => {
    try {
        const { _id, manga_id, author_id, company_id } = req.body;

        if (!_id) {
            return res.status(400).json({
                success: false,
                message: "Debes proporcionar el _id del favorito a modificar"
            });
        }

        // Validar que al menos un campo se quiera modificar
        if (!manga_id && !author_id && !company_id) {
            return res.status(400).json({
                success: false,
                message: "Debes proporcionar al menos un campo a actualizar (manga_id, author_id o company_id)"
            });
        }

        // Buscar y actualizar
        const updatedFavorite = await Favorite.findByIdAndUpdate(
            _id,
            { manga_id, author_id, company_id },
            { new: true, runValidators: true }
        );

        if (!updatedFavorite) {
            return res.status(404).json({
                success: false,
                message: "Favorito no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            message: "Favorito actualizado correctamente",
            favorite: updatedFavorite
        });
    } catch (error) {
        next(error);
    }
};

export default updateFavorites;

