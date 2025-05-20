import "dotenv/config.js";
import "../../config/database.js";
import Favorite from "../Favorites.js";

const favorites = [
  {
    manga_id: "6824d2fc026521b6712c2aed",
    author_id: "68221069b1ee15e4669d0c92"
  },
  {
    manga_id: "6824d2fe026521b6712c2b07",
    company_id: "6823939f2c79ac97a16fc497"
  },
  {
    manga_id: "6824d300026521b6712c2b1d",
    author_id: "68221069b1ee15e4669d0c93"
  },
  {
    manga_id: "6824d305026521b6712c2b65",
    company_id: "6823939f2c79ac97a16fc499"
  },
  {
    manga_id: "6824d312026521b6712c2c0f",
    author_id: "68221069b1ee15e4669d0c94"
  }
];

await Favorite.insertMany(favorites);
console.log("Favoritos insertados con éxito.");