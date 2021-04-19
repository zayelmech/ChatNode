const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller'

)
router.get('/', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    response.success(req, res, 'Lista de mensajes');

});

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');
        });
});

module.exports = router;