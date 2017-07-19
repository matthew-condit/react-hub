const messages = [];

exports.addMessage = (message) => {
    messages.push({
        text: message,
        timestamp: new Date(),
        user: "Matt Condit"
    })
}
