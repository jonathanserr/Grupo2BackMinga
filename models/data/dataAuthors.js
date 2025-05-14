import "dotenv/config.js";
import "../../config/database.js";
import author from "../Author.js";

const authors = [
    {
        name: "Lucía Luna",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
        user_id: "68221069b1ee15e4669d0c92", //lucia
        active: true,
        city: "Buenos Aires",
        country: "Argentina",
        date: "1990-06-15"
    },
    {
        name: "Miguel Humo",
        photo: "https://randomuser.me/api/portraits/men/11.jpg",
        user_id: "68221069b1ee15e4669d0c93", //miguel
        active: true,
        city: "Lima",
        country: "Perú",
        date: "1985-09-20"
    },
    {
        name: "Sofía Onda",
        photo: "https://randomuser.me/api/portraits/women/12.jpg",
        user_id: "68221069b1ee15e4669d0c94", //sofia
        active: false,
        city: "Madrid",
        country: "España",
        date: "1992-03-10"
    },
    {
        name: "Eric",
        photo: "https://randomuser.me/api/portraits/men/13.jpg",
        user_id: "68221069b1ee15e4669d0c95", //eric
        active: true,
        city: "Bogotá",
        country: "Colombia",
        date: "1988-12-01"
    },
    {
        name: "Lucas",
        photo: "https://randomuser.me/api/portraits/women/14.jpg",
        user_id: "68221069b1ee15e4669d0c96", //lucas
        active: false,
        city: "Santiago",
        country: "Chile",
        date: "1995-07-22"
    },
    {
        name: "Alejandro",
        photo: "https://randomuser.me/api/portraits/men/15.jpg",
        user_id: "68221069b1ee15e4669d0c97", //alejandro
        active: true,
        city: "Montevideo",
        country: "Uruguay",
        date: "1991-11-05"
    }
];

await author.insertMany(authors);
console.log("Autores insertados con éxito.");
