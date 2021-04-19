const express = require('express');
const router = express.Router();
const response = require('../../network/response');

router.get('/', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    response.success(req, res, 'Lista de mensajes');

});

router.post('/', (req, res) => {
    if (req.query.error == "ok") {
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación de los errores');
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
});
/* 
router.delete('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    //res.send();
    res.status(201).send([{ error: '', body: 'creado correctamente' }]);
    //res.send('HOLA desde DELETE:' + req.body.text);
}); */

module.exports = router;