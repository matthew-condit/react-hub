import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function newMessage(cb) {
    socket.on('newMessage', message => {
        console.log('soc', message);
        cb(null, message)
    });
}

function sendMessage(message) {
    console.log(message);
    socket.emit('messageSent', message);
}

export { newMessage, sendMessage };