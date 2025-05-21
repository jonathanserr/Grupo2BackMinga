import Reaction from "../../models/Reaction.js";
import author from "../../models/Author.js";
import Company from "../../models/Company.js"
import Manga from "../../models/Manga.js";

const getReactions = async (req, res, next) => {
  try {

    const reactions = await Reaction.find().populate("author_id").populate("company_id").populate("user").populate("manga_id"); 

   
    res.status(200).json({
      success: true,
      reactions,
    });
  } catch (error) {
    next(error);
  }
};

export default getReactions;
