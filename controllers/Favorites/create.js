import Favorite from "../../models/Favorites.js";

const createFavorites = async (req, res, next) => {
    try {
        const { manga_id, author_id, company_id } = req.body;

        // Validación: al menos uno debe estar presente
        if (!manga_id && !author_id && !company_id) {
            return res.status(400).json({
                success: false,
                message: 'Debes seleccionar al menos un favorito (manga_id, author_id o company_id)'
            });
        }

        // Crear el documento
        const newFavorite = new Favorite({
            manga_id,
            author_id,
            company_id
        });

        await newFavorite.save();

        return res.status(200).json({
            success: true,
            message: 'Favorito creado correctamente',
            favorite: newFavorite
        });
    } catch (error) {
        next(error);
    }
};

export default createFavorites;
