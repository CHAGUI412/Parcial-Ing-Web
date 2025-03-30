const express = require('express');
const router = express.Router();
const patrocinadorController = require('../controllers/patrocinador.controller');
const verificarToken = require('../middlewares/auth.middleware');

//  Rutas protegidas con el middleware de autenticación
router.post('/', verificarToken, patrocinadorController.createPatrocinador);
router.get('/', verificarToken, patrocinadorController.getAllPatrocinadores);
router.get('/:id', verificarToken, patrocinadorController.getPatrocinadorById);
router.put('/:id', verificarToken, patrocinadorController.updatePatrocinador);
router.delete('/:id', verificarToken, patrocinadorController.deletePatrocinador);

module.exports = router;
