const db = require('../../models');
const Participante = db.Participante;

// Obtener todos los participantes
exports.getAllParticipantes = async (req, res) => {
  try {
    const participantes = await Participante.findAll();
    res.json(participantes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener participantes', error });
  }
};

// Obtener un participante por ID
exports.getParticipanteById = async (req, res) => {
  try {
    const participante = await Participante.findByPk(req.params.id);
    if (!participante) {
      return res.status(404).json({ message: 'Participante no encontrado' });
    }
    res.json(participante);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener participante', error });
  }
};

// Crear un nuevo participante
exports.createParticipante = async (req, res) => {
  try {
    const nuevoParticipante = await Participante.create(req.body);
    res.status(201).json(nuevoParticipante);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear participante', error });
  }
};

// Actualizar un participante por ID
exports.updateParticipante = async (req, res) => {
  try {
    const participante = await Participante.findByPk(req.params.id);
    if (!participante) {
      return res.status(404).json({ message: 'Participante no encontrado' });
    }
    await participante.update(req.body);
    res.json(participante);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar participante', error });
  }
};

// Eliminar un participante por ID
exports.deleteParticipante = async (req, res) => {
  try {
    const participante = await Participante.findByPk(req.params.id);
    if (!participante) {
      return res.status(404).json({ message: 'Participante no encontrado' });
    }
    await participante.destroy();
    res.json({ message: 'Participante eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar participante', error });
  }
};
