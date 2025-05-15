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
        admin_id: "68221069b1ee15e4669d0c8c" // Laura
    },
    {
        name: "Fantasía Oscura",
        color: "#6f42c1",
        hover: "#4b0082",
        description: "Mundos mágicos con tintes oscuros y misteriosos.",
        cover_photo: "https://source.unsplash.com/1600x900/?dark-fantasy",
        character_photo: "https://source.unsplash.com/400x400/?demon",
        admin_id: "68221069b1ee15e4669d0c8d" // Pedro
    },
    {
        name: "Slice of Life",
        color: "#e83e8c",
        hover: "#c2185b",
        description: "Relatos cotidianos con un toque introspectivo.",
        cover_photo: "https://source.unsplash.com/1600x900/?life",
        character_photo: "https://source.unsplash.com/400x400/?girl",
        admin_id: "68221069b1ee15e4669d0c8e" // Ana
    },
    {
        name: "Shonen",
        color: "#f39c12",
        hover: "#e67e22",
        description: "Historias de acción y crecimiento dirigidas a jóvenes.",
        cover_photo: "https://source.unsplash.com/1600x900/?anime,action",
        character_photo: "https://source.unsplash.com/400x400/?boy,anime",
        admin_id: "68221069b1ee15e4669d0c8c" // Laura
    },
    {
        name: "Seinen",
        color: "#2c3e50",
        hover: "#34495e",
        description: "Mangas para un público más maduro, con tramas complejas.",
        cover_photo: "https://source.unsplash.com/1600x900/?mature,manga",
        character_photo: "https://source.unsplash.com/400x400/?man,anime",
        admin_id: "68221069b1ee15e4669d0c8d" // Pedro
    },
    {
        name: "Comics",
        color: "#27ae60",
        hover: "#1e8449",
        description: "Historietas occidentales y de otros estilos globales.",
        cover_photo: "https://source.unsplash.com/1600x900/?comic,superhero",
        character_photo: "https://source.unsplash.com/400x400/?superhero",
        admin_id: "68221069b1ee15e4669d0c8e" // Ana
    },
    {
        name: "Shojo",
        color: "#fd79a8",
        hover: "#e84393",
        description: "Romance y emociones centradas en chicas adolescentes.",
        cover_photo: "https://source.unsplash.com/1600x900/?romantic,anime",
        character_photo: "https://source.unsplash.com/400x400/?anime,girl",
        admin_id: "68221069b1ee15e4669d0c8c" // Laura
    }
];

await category.insertMany(categories);
console.log("Categories insertadas con éxito.");
