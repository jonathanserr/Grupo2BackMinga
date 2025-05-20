import "dotenv/config.js";
import "../../config/database.js";
import Reaction from "../Reaction.js";

const reactions = [
  {
    manga_id: "6827c117203f3bbdaa3bf971", // Alice in Borderland
    chapter_id: "6827c117203f3bbdaa3bf973", // Welcome - part 1
    author_id: "6824d1aa07a41ce4d9efd982",
    reaction: 1 // 👍
  },
  {
    manga_id: "6827c11a203f3bbdaa3bf98b", // Shingeki no Kyojin
    chapter_id: "6827c11a203f3bbdaa3bf991", // Discharge night
    company_id: "6824d1aa07a41ce4d9efd987",
    reaction: 2 // 👎
  },
  {
    manga_id: "6827c11c203f3bbdaa3bf9a1", // The promise neverland
    chapter_id: "6827c11c203f3bbdaa3bf9a3", //Grace Field Home
    author_id: "6824d1aa07a41ce4d9efd983",
    reaction: 3 // 😮
  },
  {

    manga_id: "6824d302026521b6712c2b35", // Bleach
    chapter_id: "6824d2fd026521b6712c2afd", // 5 of spades - part 2
    company_id: "6823939f2c79ac97a16fc498", 

    reaction: 4 // 😍
  },
  {
    manga_id: "6827c123203f3bbdaa3bf9e9", // Gantz
    chapter_id: "6827c11b203f3bbdaa3bf99b", // Howl
    author_id: "6824d1aa07a41ce4d9efd985",
    reaction: 1 // 👍
  },
  {
    manga_id: "6827c133203f3bbdaa3bfa93", // Citrus
    chapter_id: "6827c119203f3bbdaa3bf987", // Third day
    author_id: "6824d1aa07a41ce4d9efd984",
    reaction: 4 // 😍
  },
  
];

await Reaction.insertMany(reactions);
console.log("Reacciones insertadas con éxito.");
