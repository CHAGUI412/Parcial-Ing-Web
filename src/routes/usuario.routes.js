const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

// Rutas de autenticación
router.post('/registro', usuarioController.registrar);
router.post('/login', usuarioController.login);

module.exports = router;
