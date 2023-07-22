import express from 'express';
import morgan from 'morgan';
import indexRouter from "./routes";
import pokemonRouter from "./routes/pokemon";
import {Server} from "socket.io";
import http from "http";


const app = express();
const port = 3000;

const server = http.createServer(app)
const io = new Server(server)

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/pokemon/', pokemonRouter);


io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    console.log('message: ' + msg);
    io.emit('message', msg)
  })

  console.log("user connected")
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
})
server.listen(port, () => {
  console.log('Server running on port: ', port);
});
