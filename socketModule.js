import messageController from './controllers/messagesController';

exports.newMessage = (message)=> {
    console.warn("here", message);
    messageController.addMessage(message);
};