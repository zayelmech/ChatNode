const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
//const router = require('./components/message/network');
const router = require('./network/routes');
console.log('[db] Conectando...');
db()
    .then(() => {
        console.log('[db] Conectada con exito');
    })
    .catch((e) => {
        console.log(`[db] Something crashed-->${e}`);
    });


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(router);

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion esta escuchando en Localhost:3000');