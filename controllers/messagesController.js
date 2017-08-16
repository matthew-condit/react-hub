const messages = [
    {
        text: 'hey annie',
        timestamp: new Date(),
        user: {userName:'Matt'}
    }
];

exports.addMessage = (message, userName) => {
    messages.push({
        text: message,
        timestamp: new Date(),
        user: {userName}
    });
    console.log(message);
    return messages;
};

exports.getMessages = () => {
    return messages;
};
