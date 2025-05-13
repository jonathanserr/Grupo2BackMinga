import "dotenv/config.js";
import "../../config/database.js";
import category from "../Category.js";

const categories = [
    {
        name: "Ciencia Ficción",
        color: "#1f8ef1",
        hover: "#0056b3",
        description: "Mangas que exploran futuros posibles y tecnología.",
        cover_photo: "https://source.unsplash.com/1600x900/?sci-fi",
        character_photo: "https://source.unsplash.com/400x400/?robot",
        admin_id: "68221069b1ee15e4669d0c8c" //laura
    },
    {
        name: "Fantasía Oscura",
        color: "#6f42c1",
        hover: "#4b0082",
        description: "Mundos mágicos con tintes oscuros y misteriosos.",
        cover_photo: "https://source.unsplash.com/1600x900/?dark-fantasy",
        character_photo: "https://source.unsplash.com/400x400/?demon",
        admin_id: "68221069b1ee15e4669d0c8d" //pedro
    },
    {
        name: "Slice of Life",
        color: "#e83e8c",
        hover: "#c2185b",
        description: "Relatos cotidianos con un toque introspectivo.",
        cover_photo: "https://source.unsplash.com/1600x900/?life",
        character_photo: "https://source.unsplash.com/400x400/?girl",
        admin_id: "68221069b1ee15e4669d0c8e" //ana
    }
];

await category.insertMany(categories);
console.log("Categories insertadas con éxito.");
