const store = require('./store');

function addUser(name) {
    if (!name) {
        console.error('[Message controller] No hay nombre de usuario');
        return Promise.reject('Invalid name')
    }

    const user = {
        name,
    };

    return store.add(user);
}

function listUsers() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}
/*
function updateMessage(id, message) {
    return new Promise(async(resolve, reject) => {
        if (!id || !message) {
            reject('Datos invalidos')
            return false;
        } else {
            const result = await store.updateText(id, message);
            resolve(result);
        }
    });
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {

        if (!id) {
            reject('Id invalido');
            return false;
        }

        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    });
}
 */
module.exports = {
    addUser,
    listUsers,
};