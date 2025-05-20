import "dotenv/config.js";
import "../../config/database.js";
import Comment from "../Comment.js";

const comments = [
{
    chapter_id: "6827c11a203f3bbdaa3bf98d", // Titans attack
    author_id: "6824d1aa07a41ce4d9efd982", // Lucía Luna
    message: "La escena de acción fue brutal. ¡Me encantó!"
},
{
    chapter_id: "6827c11d203f3bbdaa3bf9a7", // Dim light
    company_id: "6823939f2c79ac97a16fc498", // Dimensiones Perdidas Press
    message: "Narrativa envolvente y profunda. Muy bien lograda."
},
{
    chapter_id: "6827c11f203f3bbdaa3bf9c3", // The way out
    author_id: "6824d1aa07a41ce4d9efd983", // Miguel Humo
    message: "El final me dejó pensando. Muy buen cierre de capítulo."
}
];

await Comment.insertMany(comments);
console.log("Comentarios insertados con éxito.");
