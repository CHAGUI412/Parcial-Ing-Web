# 🥊 Lucha por tu libertad

**Proyecto Full Stack** — Backend para una aplicación basada en un torneo distópico, donde participantes luchan por su libertad.  
Este sistema incluye autenticación, control de roles, combates, mercado negro, dictadores y patrocinadores.

## 🧩 Tecnologías utilizadas

- **Node.js**
- **Express**
- **Sequelize + PostgreSQL**
- **JWT para autenticación**
- **Dotenv para variables de entorno**
- **React (frontend creado pero no implementado)**

---

## 🗃️ Estructura del proyecto

lucha-por-tu-libertad/  
│── config/                 # Configuración de Sequelize  
│── migrations/             # Migraciones de base de datos  
│── models/                 # Modelos Sequelize  
│── seeders/                # Datos de prueba  
│── src/  
│   ├── controllers/        # Lógica de negocio  
│   ├── routes/             # Rutas protegidas  
│   ├── middlewares/        # Middleware de autenticación  
│   └── server.js           # Entrada principal del backend  
│── frontend/               # (Base creada con React, no implementado)  
│── .env                    # Variables de entorno (no subir a GitHub)  
│── README.md               # Este archivo

---

## ✅ Funcionalidades implementadas

- [x] Registro y login de usuarios con JWT.
- [x] Protección de rutas según autenticación.
- [x] Modelos y relaciones entre:
  - Participantes
  - Combates
  - Dictadores
  - Patrocinadores
  - Mercado negro
  - Compras
- [x] Simulación de combates con lógica de daño y muerte.
- [x] Asociación entre participantes y combates.
- [x] Middleware para validar tokens.
- [x] Seeders con datos de ejemplo.
- [x] Migraciones para campos adicionales especificados.
- [x] Estructura de frontend lista (React) aunque no desarrollada.

---

## 🚀 Instrucciones para correr el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https:[//github.com/TU_USUARIO/TU_REPO.git](https://github.com/CHAGUI412/Parcial-Ing-Web)
   cd lucha-por-tu-libertad
---

## 📌 Nota final

Lamento la demora en la entrega del proyecto y que algunas partes no estén completamente implementadas.  
Declaro que este trabajo fue realizado de forma individual por **Isaac David Chagui Galeano**, sin ayuda externa.

Gracias por su comprensión.
