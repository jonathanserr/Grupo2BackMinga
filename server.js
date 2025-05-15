import express from 'express'; 
import 'dotenv/config.js';
import './config/database.js'
import cors from 'cors';
import morgan from 'morgan';
import routerIndex from './router/index.js';
<<<<<<< HEAD
import error_404 from './middlewares/error_404.js';
import error_handler from './middlewares/error_handler.js';
=======
import error400 from './Middlewares/error400.js';
import error404 from './Middlewares/error404.js';
import error500 from './Middlewares/error500.js';

>>>>>>> develop

const server = express(); 

const PORT = process.env.PORT || 8080;

const ready = () => console.log(`Server is running on port: ${PORT}`);

//  configure server settings:
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

//  configure routes:
server.use('/api',routerIndex);
<<<<<<< HEAD
//server.use(not_found_handler);
 server.use(error_404);
server.use(error_handler);
=======


server.use(error404)
server.use(error400)
server.use(error500)

>>>>>>> develop

server.listen(PORT, ready);