import ioClient from 'socket.io-client';

const BACKEND_PORT = 'http://localhost:3000';

const socket = ioClient(BACKEND_PORT);

export const io = socket