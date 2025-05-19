import "dotenv/config.js";
import "../../config/database.js";
import Reaction from "../Reaction.js";

const reactions = [
  {
    manga_id: "6824d2fc026521b6712c2aed", // Alice in Borderland
    chapter_id: "6824d2fc026521b6712c2aef", // Welcome - part 1
    author_id: "68221069b1ee15e4669d0c92",
    reaction: 1 // 👍
  },
  {
    manga_id: "6824d2fe026521b6712c2b07", // Shingeki no Kyojin
    chapter_id: "6824d2ff026521b6712c2b0d", // Discharge night
    company_id: "6823939f2c79ac97a16fc497",
    reaction: 2 // 👎
  },
  {
    manga_id: "6824d300026521b6712c2b1d", // The promise neverland
    author_id: "68221069b1ee15e4669d0c93",
    reaction: 3 // 😮
  },
  {
    manga_id: "6824d302026521b6712c2b35", // Bleach
    chapter_id: "6824d2fd026521b6712c2afd", // 5 of spades - part 2
    company_id: "6823939f2c79ac97a16fc498", 
    reaction: 4 // 😍
  },
  {
    manga_id: "6824d305026521b6712c2b65", // Gantz
    chapter_id: "6824d2ff026521b6712c2b17", // Howl
    author_id: "68221069b1ee15e4669d0c95",
    company_id: "6823939f2c79ac97a16fc499",
    reaction: 1 // 👍
  },
  {
    manga_id: "6824d312026521b6712c2c0f", // Citrus
    chapter_id: "6824d2fe026521b6712c2b03", // Third day
    author_id: "68221069b1ee15e4669d0c94",
    reaction: 4 // 😍
  },
  // Reacciones mínimas (solo campos requeridos)
  {
    manga_id: "6824d30f026521b6712c2be1", // World War Hulk
    reaction: 2 // 👎
  },
  {
    manga_id: "6824d30a026521b6712c2ba3", // Planet Hulk
    reaction: 3 // 😮
  },
  {
    manga_id: "6824d310026521b6712c2bef", // Pokemon
    reaction: 1 // 👍
  },
  {
    manga_id: "6824d315026521b6712c2c2b", // Ao Haru Ride
    reaction: 4 // 😍
  }
];

await Reaction.insertMany(reactions);
console.log("Reacciones insertadas con éxito.");
