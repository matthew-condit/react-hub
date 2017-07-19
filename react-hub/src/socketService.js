import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function newMessage(cb) {
    socket.on('message', message => cb(null, message));
}

function sendMessage(message) {
    socket.emit('messageSent', message);
}

export { newMessage, sendMessage };