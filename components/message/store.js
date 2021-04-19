const db = require('mongoose');
const Model = require('./model');
const dbUserData = require('./dbUserDaTa');

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

async function getMessages() {
    const messages = await Model.find();
    return messages;
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({ _id: id });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    //get
    //update
    //delete
}