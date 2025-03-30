const express = require('express');
const router = express.Router();
const comprasController = require('../controllers/compras.controller');
const verificarToken = require('../middlewares/auth.middleware');

//  Rutas protegidas
router.post('/', verificarToken, comprasController.createCompra);
router.get('/', verificarToken, comprasController.getAllCompras);
router.get('/:id', verificarToken, comprasController.getCompraById);
router.put('/:id', verificarToken, comprasController.updateCompra);
router.delete('/:id', verificarToken, comprasController.deleteCompra);

module.exports = router;
