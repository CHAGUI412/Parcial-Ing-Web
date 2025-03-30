const { Combate, Participante } = require('../../models');

const combateController = {
  // Obtener todos los combates
  async getAll(req, res) {
    try {
      const combates = await Combate.findAll();
      res.json(combates);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los combates' });
    }
  },

  // Obtener uno por ID
  async getById(req, res) {
    try {
      const combate = await Combate.findByPk(req.params.id);
      if (!combate) {
        return res.status(404).json({ error: 'Combate no encontrado' });
      }
      res.json(combate);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el combate' });
    }
  },

  // Crear combate
  async create(req, res) {
    try {
      const { participanteId1, participanteId2, fecha } = req.body;

      const participante1 = await Participante.findByPk(participanteId1);
      const participante2 = await Participante.findByPk(participanteId2);

      if (!participante1 || !participante2) {
        return res.status(404).json({ error: 'Uno o ambos participantes no encontrados' });
      }

      // Calcular el daño de cada participante
      let dañoParticipante1 = participante1.fuerza - participante2.resistencia;
      let dañoParticipante2 = participante2.fuerza - participante1.resistencia;

      // Si el daño es menor que 0, significa que no hicieron daño
      dañoParticipante1 = Math.max(dañoParticipante1, 0);
      dañoParticipante2 = Math.max(dañoParticipante2, 0);

      // Si un participante recibe un daño mayor que su resistencia, muere
      if (participante1.resistencia - dañoParticipante1 <= 0) {
        await participante1.update({ estado: 'muerto' });
      }
      if (participante2.resistencia - dañoParticipante2 <= 0) {
        await participante2.update({ estado: 'muerto' });
      }

      // Determinar quién ganó
      let ganador = null;
      if (dañoParticipante1 > dañoParticipante2) {
        ganador = participante1;
        await participante1.increment('victorias');
        await participante2.increment('derrotas');
      } else if (dañoParticipante1 < dañoParticipante2) {
        ganador = participante2;
        await participante2.increment('victorias');
        await participante1.increment('derrotas');
      } else {
        return res.json({ mensaje: 'El combate terminó en empate' });
      }

      // Registrar el combate
      const combate = await Combate.create({
        fecha,
        dictadorId: req.usuario.id, // Asumiendo que el dictador está en el token
        ganadorId: ganador.id,
      });

      res.status(201).json({ combate, ganador: ganador.nombre });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el combate', detalles: error.message });
    }
  },

  // Actualizar
  async update(req, res) {
    try {
      const combate = await Combate.findByPk(req.params.id);
      if (!combate) {
        return res.status(404).json({ error: 'Combate no encontrado' });
      }
      await combate.update(req.body);
      res.json(combate);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el combate' });
    }
  },

  // Eliminar
  async delete(req, res) {
    try {
      const combate = await Combate.findByPk(req.params.id);
      if (!combate) {
        return res.status(404).json({ error: 'Combate no encontrado' });
      }
      await combate.destroy();
      res.json({ mensaje: 'Combate eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el combate' });
    }
  }
};

module.exports = combateController;
