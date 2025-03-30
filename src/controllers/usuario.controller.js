const { Usuario } = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const usuarioController = {
  // Registro
  async registrar(req, res) {
    try {
      const { nombre, email, password } = req.body;

      const usuarioExistente = await Usuario.findOne({ where: { email } });
      if (usuarioExistente) {
        return res.status(400).json({ mensaje: 'Email ya registrado' });
      }

      // Crear el usuario (el modelo ya encripta en el hook)
      const nuevoUsuario = await Usuario.create({
        nombre,
        email,
        password
      });

      res.status(201).json({ mensaje: 'Usuario creado correctamente', usuario: nuevoUsuario });
    } catch (error) {
      res.status(500).json({ error: 'Error al registrar el usuario', detalles: error.message });
    }
  },

  // Login
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }

      const contrasenaValida = await bcrypt.compare(password, usuario.password);
      if (!contrasenaValida) {
        return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
      }

      // Crear token incluyendo el rol
      const token = jwt.sign(
        {
          id: usuario.id,
          email: usuario.email,
          rol: usuario.rol
        },
        'secreto_super_seguro', 
        { expiresIn: '1h' }
      );

      res.json({ mensaje: 'Login exitoso', token });
    } catch (error) {
      res.status(500).json({ error: 'Error al iniciar sesión', detalles: error.message });
    }
  }
};

module.exports = usuarioController;
