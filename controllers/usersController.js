let users = [];

exports.getUsers = () => users;

exports.signin = (user, socketId) => {
    users.push(Object.assign({}, user, {socketId: socketId}));
    return users;
};

exports.signout = (socketid) => {
    users = users.filter(user =>  user.socketId !== socketid);
    console.log(users);
    return users;
}