const express = require('express');

var app = express();

app.use('/', (req, res) => {
    res.send('HOLA');
});

app.listen(3000);
console.log('La aplicacion esta escuchando en Localhost:3000');