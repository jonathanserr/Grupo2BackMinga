import "dotenv/config.js";
import "../../config/database.js";
import company from "../Company.js";

const companies = [
    {
        name: "Editorial Realidad Invertida",
        website: "https://realidadinvertida.com",
        description: "Editorial enfocada en mangas filosóficos.",
        photo: "https://randomuser.me/api/portraits/lego/1.jpg",
        user_id: "68221069b1ee15e4669d0c89", //juan
        active: true
    },
    {
        name: "Dimensiones Perdidas Press",
        website: "https://dimensionesperdidas.org",
        description: "Especialistas en cómics alternativos.",
        photo: "https://randomuser.me/api/portraits/lego/2.jpg",
        user_id: "68221069b1ee15e4669d0c8a", //maria
        active: true
    },
    {
        name: "Eterno Ocaso Editorial",
        website: null,
        description: "Historias oscuras y fantásticas.",
        photo: "https://randomuser.me/api/portraits/lego/3.jpg",
        user_id: "68221069b1ee15e4669d0c8b", //carlos
        active: false
    }
];

await company.insertMany(companies);
console.log("Companies insertadas con éxito.");
