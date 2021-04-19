const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');


router.post('/', (req, res) => {
    controller.addChat(req.body.users)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error inesperado', 500, e);
        });

});

router.get('/:userId', (req, res) => {
    controller.listChats(req.params.userId)
        .then((users) => {
            response.success(req, res, users, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador[network] :' + e);
        });
});
module.exports = router;