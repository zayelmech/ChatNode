const express = require('express');
const bodyParser = require('body-parser');

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
    res.send('HOLA desde get');
});

router.post('/message', (req, res) => {
    res.send('HOLA desde post');
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