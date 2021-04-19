const db = require('mongoose');
const dbUserData = require('./components/message/dbUserData');

const dbUser = dbUserData.user;
const dbPassword = dbUserData.password;

db.Promise = global.Promise;

async function connect() {

    await db.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.d54r6.mongodb.net/platziNode?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'messages'
    });
}

module.exports = connect;