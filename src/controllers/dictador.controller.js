const { Dictador } = require('../../models');

const dictadorController = {
  async createDictador(req, res) {
    try {
      const { nombre, nivelCorrupcion, ejercito } = req.body;
      const dictador = await Dictador.create({ nombre, nivelCorrupcion, ejercito });
      res.status(201).json(dictador);
    } catch (error) {
      res.status(500).json({ error: 'Error al registrar el dictador' });
    }
  },

  async getAllDictadores(req, res) {
    try {
      const dictadores = await Dictador.findAll();
      res.json(dictadores);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los dictadores' });
    }
  },

  async getDictadorById(req, res) {
    try {
      const dictador = await Dictador.findByPk(req.params.id);
      if (!dictador) {
        return res.status(404).json({ error: 'Dictador no encontrado' });
      }
      res.json(dictador);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el dictador' });
    }
  },

  async updateDictador(req, res) {
    try {
      const { nombre, nivelCorrupcion, ejercito } = req.body;
      const dictador = await Dictador.findByPk(req.params.id);
      if (!dictador) {
        return res.status(404).json({ error: 'Dictador no encontrado' });
      }
      await dictador.update({ nombre, nivelCorrupcion, ejercito });
      res.json(dictador);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el dictador' });
    }
  },

  async deleteDictador(req, res) {
    try {
      const dictador = await Dictador.findByPk(req.params.id);
      if (!dictador) {
        return res.status(404).json({ error: 'Dictador no encontrado' });
      }
      await dictador.destroy();
      res.json({ message: 'Dictador eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el dictador' });
    }
  }
};

module.exports = dictadorController;
