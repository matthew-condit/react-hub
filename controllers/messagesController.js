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
    });
    return messages;
};

exports.getMessages = () => {
    return messages;
}
