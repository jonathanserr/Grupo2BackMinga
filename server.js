import express from 'express'; 
import 'dotenv/config.js';
import './config/database.js'
import cors from 'cors';
import morgan from 'morgan';
import routerIndex from './router/index.js';
// import not_found_handler from './middlewares/not_found_handler.js';
// import error_handler from './middlewares/error_handler.js';
// import error_400 from './middlewares/error_400.js';


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
// server.use(not_found_handler);
// server.use(error_400);
// server.use(error_handler);

server.listen(PORT, ready);