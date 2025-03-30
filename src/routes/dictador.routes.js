const express = require('express');
const router = express.Router();
const dictadorController = require('../controllers/dictador.controller');
const verificarToken = require('../middlewares/auth.middleware');

//  Rutas protegidas con el middleware de autenticación
router.post('/', verificarToken, dictadorController.createDictador);
router.get('/', verificarToken, dictadorController.getAllDictadores);
router.get('/:id', verificarToken, dictadorController.getDictadorById);
router.put('/:id', verificarToken, dictadorController.updateDictador);
router.delete('/:id', verificarToken, dictadorController.deleteDictador);

module.exports = router;
