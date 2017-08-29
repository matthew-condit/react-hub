import openSocket from 'socket.io-client';
const  socket = openSocket('http://10.0.0.185:8001');

function newMessage(cb) {
    socket.on('newMessage', messages => {
        console.log("newMessage", messages);
        cb(null, messages)
    });
}

function sendMessage(message, userName) {
    socket.emit('messageSent', message, userName);
}

function newUser(cb) {
    socket.on('newUser', users => {
        console.log("users", users);
        cb(null, users);
    })
}


function userLeft(cb) {
    socket.on('userRemoved', users => {
        console.log("disconnectedUser", users);
        cb(null, users);
    })
}

function signin(user) {
    socket.emit('signin', user)
}


export { newMessage, sendMessage, newUser, userLeft, signin };