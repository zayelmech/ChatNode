const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');


router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then((data) => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 500, 'Error en el controlador [network] :' + e);
        });
});

/* 
router.get('/', (req, res) => {
    const filterMessages = req.query.user || null;

    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error inesperado', 500, e);
        });

});

router.patch('/:id', function(req, res) {
    //console.log(req.params.id);
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, '[network error]', 500, e);
        })

});

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200)
        })
        .catch(e => {
            response.error(req, res, '[on delete error]', 500, e);
        });
}); */
module.exports = router;