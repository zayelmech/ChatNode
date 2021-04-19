const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');
const router = express.Router();
//import { router } from "express";

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);


router.get('/message', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    response.success(req, res, 'Lista de mensajes');

});

router.post('/message', (req, res) => {
    if (req.query.error == "ok") {
        response.error(req, res, 'Error simulado', 400);
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
});

router.delete('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    //res.send();
    res.status(201).send([{ error: '', body: 'creado correctamente' }]);
    //res.send('HOLA desde DELETE:' + req.body.text);
});
/* 
app.use('/', (req, res) => {
    res.send('HOLA');
});
 */
app.listen(3000);
console.log('La aplicacion esta escuchando en Localhost:3000');