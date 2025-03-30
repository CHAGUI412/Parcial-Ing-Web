const express = require('express');
const router = express.Router();
const mercadoNegroController = require('../controllers/mercadonegro.controller');
const verificarToken = require('../middlewares/auth.middleware');

//  Rutas protegidas
router.post('/', verificarToken, mercadoNegroController.createItem);
router.get('/', verificarToken, mercadoNegroController.getAllItems);
router.get('/:id', verificarToken, mercadoNegroController.getItemById);
router.put('/:id', verificarToken, mercadoNegroController.updateItem);
router.delete('/:id', verificarToken, mercadoNegroController.deleteItem);

module.exports = router;
