const Model = require('./model');

function addUser(User) {

    const myUser = new Model(User);
    return myUser.save();

}

async function listUsers() {

    const messages = await Model.find();
    return messages;
}
/*
async function updateText(id, message) {
    const foundMessage = await Model.findOne({ _id: id });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    });
}
*/
module.exports = {
    add: addUser,
    list: listUsers,
}