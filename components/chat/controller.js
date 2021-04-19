const store = require('./store');

function addChat(users) {
    if (!users || !Array.isArray(users)) {
        console.error('[Message controller] No hay nombre de usuario');
        return Promise.reject('Invalid users')
    }

    const chat = {
        users: users,
    };

    return store.add(chat);
}

function listChats(userId) {
    return store.list(userId);

}

module.exports = {
    addChat,
    listChats,
};