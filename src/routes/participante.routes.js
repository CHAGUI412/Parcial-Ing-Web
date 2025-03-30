const express = require('express');
const router = express.Router();
const participanteController = require('../controllers/participante.controller');
const verificarToken = require('../middlewares/auth.middleware');

//  Rutas protegidas con el middleware de autenticación
router.get('/', verificarToken, participanteController.getAllParticipantes);
router.get('/:id', verificarToken, participanteController.getParticipanteById);
router.post('/', verificarToken, participanteController.createParticipante);
router.put('/:id', verificarToken, participanteController.updateParticipante);
router.delete('/:id', verificarToken, participanteController.deleteParticipante);

module.exports = router;
