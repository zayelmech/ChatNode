const express = require('express');
const multer = require('multer');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

/* var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
});
 */
const upload = multer({
    dest: 'public/files/',
})

router.get('/', (req, res) => {
    const filterMessages = req.query.chat || null;

    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error inesperado', 500, e);
        });

});

router.post('/', upload.single('file'), (req, res) => {
    console.log(req.file);
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador[network] :' + e);
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
});
module.exports = router;