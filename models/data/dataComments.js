import "dotenv/config.js";
import "../../config/database.js";
import Comment from "../Comment.js";

const comments = [
    {
        chapter_id: "6824d2fc026521b6712c2aef", // Welcome - part 1
        author_id: "68221069b1ee15e4669d0c92", // Lucía Luna
        message: "¡Qué gran inicio! Me atrapó desde el primer momento."
    },
    {
        chapter_id: "6824d2fd026521b6712c2af3", // 3 of clubs - part 1
        company_id: "6823939f2c79ac97a16fc497", // Editorial Realidad Invertida
        message: "Gran trabajo del equipo editorial. Arte impecable."
    },
    {
        chapter_id: "6824d2fe026521b6712c2b09", // Titans attack
        author_id: "68221069b1ee15e4669d0c93", // Miguel Humo
        message: "La escena de acción fue brutal. ¡Me encantó!"
    },
    {
        chapter_id: "6824d2ff026521b6712c2b11", // Dim light
        company_id: "6823939f2c79ac97a16fc498", // Dimensiones Perdidas Press
        message: "Narrativa envolvente y profunda. Muy bien lograda."
    },
    {
        chapter_id: "6824d300026521b6712c2b21", // The way out
        author_id: "68221069b1ee15e4669d0c94", // Sofía Onda
        message: "El final me dejó pensando. Muy buen cierre de capítulo."
    },
    {
        chapter_id: "6824d2fd026521b6712c2af7", // visa
        author_id: "68221069b1ee15e4669d0c95", // Tomás Silencio
        company_id: "6823939f2c79ac97a16fc499", // Eterno Ocaso Editorial
        message: "Una historia que da escalofríos. Excelente trabajo conjunto."
    }
];

await Comment.insertMany(comments);
console.log("Comentarios insertados con éxito.");
