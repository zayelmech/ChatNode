const db = require('mongoose');
const Model = require('./model');
const dbUserData = require('./dbUserData');

const dbUser = dbUserData.user;
const dbPassword = dbUserData.password;

db.Promise = global.Promise;
db.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.d54r6.mongodb.net/platziNode?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'messages'
});

console.log('[db] conectada con exito');

function addMessage(message) {

    const myMessage = new Model(message);
    myMessage.save();

}

async function getMessages(filterUser) {
    let filter = {};
    if (filterUser != null) {
        filter = { user: filterUser };
    }
    const messages = await Model.find(filter);
    return messages;
}

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
module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
    //get
    //update
    //delete
}