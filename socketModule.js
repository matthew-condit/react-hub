const messagesController = require('./controllers/messagesController');

exports.newMessage = (message)=> {
    console.warn("here", message);
    messagesController.addMessage(message);
};

exports.getMessages = () => {
    console.log('getMessage');
    messagesController.getMessages();
}