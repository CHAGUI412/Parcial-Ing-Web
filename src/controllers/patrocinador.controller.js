const { Patrocinador } = require('../../models');

const patrocinadorController = {
  async createPatrocinador(req, res) {
    try {
      const { nombre, empresa, fondos } = req.body;
      const patrocinador = await Patrocinador.create({ nombre, empresa, fondos });
      res.status(201).json(patrocinador);
    } catch (error) {
      res.status(500).json({ error: 'Error al registrar el patrocinador' });
    }
  },

  async getAllPatrocinadores(req, res) {
    try {
      const patrocinadores = await Patrocinador.findAll();
      res.json(patrocinadores);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los patrocinadores' });
    }
  },

  async getPatrocinadorById(req, res) {
    try {
      const patrocinador = await Patrocinador.findByPk(req.params.id);
      if (!patrocinador) {
        return res.status(404).json({ error: 'Patrocinador no encontrado' });
      }
      res.json(patrocinador);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el patrocinador' });
    }
  },

  async updatePatrocinador(req, res) {
    try {
      const { nombre, empresa, fondos } = req.body;
      const patrocinador = await Patrocinador.findByPk(req.params.id);
      if (!patrocinador) {
        return res.status(404).json({ error: 'Patrocinador no encontrado' });
      }
      await patrocinador.update({ nombre, empresa, fondos });
      res.json(patrocinador);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el patrocinador' });
    }
  },

  async deletePatrocinador(req, res) {
    try {
      const patrocinador = await Patrocinador.findByPk(req.params.id);
      if (!patrocinador) {
        return res.status(404).json({ error: 'Patrocinador no encontrado' });
      }
      await patrocinador.destroy();
      res.json({ message: 'Patrocinador eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el patrocinador' });
    }
  }
};

module.exports = patrocinadorController;
