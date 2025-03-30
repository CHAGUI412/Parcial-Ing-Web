const express = require('express');
const router = express.Router();
const combateController = require('../controllers/combate.controller');
const verificarToken = require('../middlewares/auth.middleware');

// Rutas protegidas con el middleware de autenticación
router.post('/', verificarToken, combateController.createCombate);
router.get('/', verificarToken, combateController.getAll);
router.get('/:id', verificarToken, combateController.getById);
router.put('/:id', verificarToken, combateController.update);
router.delete('/:id', verificarToken, combateController.delete);

module.exports = router;
