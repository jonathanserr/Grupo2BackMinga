import Favorite from "../../models/Favorites.js";

const getFavorites = async (req, res, next) => {
  try {
    const favorites = await Favorite.find()
      .populate("manga_id")
      .populate("author_id")
      .populate("company_id");

    res.status(200).json({
      success: true,
      favorites,
    });
  } catch (error) {
    next(error);
  }
};

export default getFavorites;
