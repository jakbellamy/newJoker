//IMPORT DEPENDENCIES HERE
import http from 'http';
import express from 'express';
import socketio from 'socketio';
import cors from 'http';
//IMPORT INTERNALS HERE
import { router } from './routes/router';

//INIT
const PORT = 8090;
const app = express()
 .use(cors())
 .use(router);
const server = http.createServer(app);
const io = socketio(server);

//SOCKET CONNECTION


//SERVE
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
