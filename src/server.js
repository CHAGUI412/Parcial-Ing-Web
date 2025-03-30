'use strict';

const express = require('express');
const cors = require('cors');
const db = require('../models'); // Importar modelos de Sequelize

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar rutas
const participanteRoutes = require('./routes/participante.routes');
const combateRoutes = require('./routes/combate.routes');
const dictadorRoutes = require('./routes/dictador.routes');
const mercadonegroRoutes = require('./routes/mercadonegro.routes');
const patrocinadorRoutes = require('./routes/patrocinador.routes');
const comprasRoutes = require('./routes/compras.routes');
const usuarioRoutes = require('./routes/usuario.routes'); 

// Usar rutas
app.use('/participantes', participanteRoutes);
app.use('/combates', combateRoutes);
app.use('/dictadores', dictadorRoutes);
app.use('/mercadonegro', mercadonegroRoutes);
app.use('/patrocinadores', patrocinadorRoutes);
app.use('/compras', comprasRoutes);
app.use('/usuarios', usuarioRoutes); 

// Sincronizar base de datos y levantar el servidor
db.sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
    const { Combate } = db;

Combate.findAll()
  .then(data => console.log('✔ Combates encontrados:', data.length))
  .catch(err => console.error('❌ Error accediendo Combate:', err));

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
});
