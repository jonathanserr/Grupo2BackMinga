import Favorite from "../../models/Favorites.js";



const deleteFavorite = async (req, res, next) => {
    try {
        const { _id } = req.body;

        if (!_id) {
            return res.status(400).json({
                success: false,
                message: "Debes proporcionar el _id del favorito a eliminar"
            });
        }

        const deleted = await Favorite.deleteOne({ _id });

        if (deleted.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Favorito no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            message: "Favorito eliminado correctamente"
        });
    } catch (error) {
        next(error);
    }
};

export default deleteFavorite;

