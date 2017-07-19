const messagesController = require('./controllers/messagesController');

exports.newMessage = (message)=> {
    return messagesController.addMessage(message);
};

exports.getMessages = () => {
    messagesController.getMessages();
}