const messages = [
    {
        text: 'hey annie',
        timestamp: new Date(),
        user: 'Annie Gaburo'
    }
];

exports.addMessage = (message) => {
    messages.push({
        text: message,
        timestamp: new Date(),
        user: "Matt Condit"
    })
};

exports.getMessages = () => {
    return messages;
}
