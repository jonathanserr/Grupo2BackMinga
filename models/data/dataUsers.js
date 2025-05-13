import "dotenv/config.js"
import "../../config/database.js"
import user from "../User.js";

const users = [
  {
    
    email: "juan.dragon@realidadinvertida.com",
    password: "Juan1234",
    photo: "https://randomuser.me/api/portraits/men/1.jpg", 
    role: 0,
    online: false
  },
  {

   
    email: "maria.laberinto@dimensionesperdidas.org",
    password: "Maria1234",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    role: 0,
    online: false
  },
  {
  
    email: "carlos.sombra@ocasoeterno.net",
    password: "Carlos1234",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    role: 0,
    online: false
  },
  {
   
    email: "laura.espiral@universosuperpuesto.io",
    password: "Laura1234",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    role: 0,
    online: false
  },
  {
  
    email: "pedro.mirada@relojsinaguja.com",
    password: "Pedro1234",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    role: 0,
    online: false
  },
  {
    
    email: "ana.neblina@fragmentodeltiempo.net",
    password: "AnaTorres1234",
    photo: "https://randomuser.me/api/portraits/women/6.jpg",
    role: 0,
    online: false
  },
  {
  
    email: "javier.luz@bosqueilusorio.org",
    password: "Javier1234",
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
    role: 0,
    online: false
  },
  {

 
    email: "carmen.palabra@maresinfinito.com",
    password: "Carmen1234",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    role: 0,
    online: false
  },
  {
    
    email: "andres.cristal@ciudadflotante.org",
    password: "Andres1234",
    photo: "https://randomuser.me/api/portraits/men/9.jpg",
    role: 0,
    online: false
  },
  {
   
    email: "lucia.luna@ventanadeltiempo.io",
    password: "Lucia1234",
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    role: 0,
    online: false
  },
  {
   
    email: "miguel.humo@universoabstracto.com",
    password: "Miguel1234",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
    role: 0,
    online: false
  },
  {
  
    email: "sofia.onda@caminodeespejos.net",
    password: "Sofia1234",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    role: 0,
    online: false
  },
  {
    
    email: "tomas.silencio@dimensionesonora.org",
    password: "Tomas1234",
    photo: "https://randomuser.me/api/portraits/men/13.jpg",
    role: 0,
    online: false
  },
  {

    email: "valentina.sueño@realidadparalela.net",
    password: "Valentina1234",
    photo: "https://randomuser.me/api/portraits/women/14.jpg",
    role: 0,
    online: false
  },
  {
  
    email: "gabriel.rayo@cielosincolor.io",
    password: "Gabriel1234",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    role: 0,
    online: false
  }
];

await user.insertMany(users);
console.log("Usuarios insertados con éxito.");
