const { Compras } = require('../../models');

const comprasController = {
  async createCompra(req, res) {
    try {
      const { participanteId, item, precio } = req.body;
      const compra = await Compras.create({ participanteId, item, precio });
      res.status(201).json(compra);
    } catch (error) {
      res.status(500).json({ error: 'Error al registrar la compra' });
    }
  },

  async getAllCompras(req, res) {
    try {
      const compras = await Compras.findAll();
      res.json(compras);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las compras' });
    }
  },

  async getCompraById(req, res) {
    try {
      const compra = await Compras.findByPk(req.params.id);
      if (!compra) {
        return res.status(404).json({ error: 'Compra no encontrada' });
      }
      res.json(compra);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la compra' });
    }
  },

  async updateCompra(req, res) {
    try {
      const { item, precio } = req.body;
      const compra = await Compras.findByPk(req.params.id);
      if (!compra) {
        return res.status(404).json({ error: 'Compra no encontrada' });
      }
      await compra.update({ item, precio });
      res.json(compra);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la compra' });
    }
  },

  async deleteCompra(req, res) {
    try {
      const compra = await Compras.findByPk(req.params.id);
      if (!compra) {
        return res.status(404).json({ error: 'Compra no encontrada' });
      }
      await compra.destroy();
      res.json({ message: 'Compra eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la compra' });
    }
  }
};

module.exports = comprasController;
