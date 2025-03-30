const { MercadoNegro } = require('../../models');

const mercadoNegroController = {
  // Crear artículo
  async createItem(req, res) {
    try {
      const { producto, precio } = req.body;
      const item = await MercadoNegro.create({ producto, precio });
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ error: 'Error al registrar el artículo en el mercado negro' });
    }
  },

  // Obtener todos los artículos
  async getAllItems(req, res) {
    try {
      const items = await MercadoNegro.findAll();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los artículos del mercado negro' });
    }
  },

  // Obtener un artículo por ID
  async getItemById(req, res) {
    try {
      const item = await MercadoNegro.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Artículo no encontrado' });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el artículo' });
    }
  },

  // Actualizar un artículo
  async updateItem(req, res) {
    try {
      const { producto, precio } = req.body;
      const item = await MercadoNegro.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Artículo no encontrado' });
      }
      await item.update({ producto, precio });
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el artículo' });
    }
  },

  // Eliminar artículo
  async deleteItem(req, res) {
    try {
      const item = await MercadoNegro.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Artículo no encontrado' });
      }
      await item.destroy();
      res.json({ message: 'Artículo eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el artículo' });
    }
  }
};

module.exports = mercadoNegroController;
