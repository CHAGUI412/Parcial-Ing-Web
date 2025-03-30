const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ mensaje: 'Token no proporcionado' });
  }

  try {
    const tokenSinBearer = token.replace('Bearer ', '');
    const verificado = jwt.verify(tokenSinBearer, 'secreto_super_seguro');
    req.usuario = verificado;
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: 'Token inválido o expirado' });
  }
};

module.exports = verificarToken;
