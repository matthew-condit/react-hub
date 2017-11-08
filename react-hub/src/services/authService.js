const USERNAME_KEY = `REACTHUB_USERNAME`;


const login = (username) => {
    LocalStorage.setItem(USERNAME_KEY, username);
};

const verifyLogin = () => {
    LocalStorage.getItem(USERNAME_KEY);
};


export {
    login,
    verifyLogin
}