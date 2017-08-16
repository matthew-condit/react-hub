const messagesController = require('./controllers/messagesController');
const usersController = require('./controllers/usersController');

exports.newMessage = (message, userName) => {
    return messagesController.addMessage(message, userName);
};

exports.getMessages = () => messagesController.getMessages();

exports.newUser = (user, socketId) => {
    return usersController.signin(user, socketId);
};

exports.removeUser = (socketId) => {
    return usersController.signout(socketId);
}

exports.getUsers = () => usersController.getUsers();
