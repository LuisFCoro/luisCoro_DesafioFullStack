const express = require('express');
const path = require('path');
const app = express();

// Configuración
app.use(express.static(path.join(__dirname, 'public'))); // Archivos estáticos
app.use(express.urlencoded({ extended: true })); // Para procesar formularios

// Rutas
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoutes');

app.use('/login', loginRoutes); // Ruta para Login
app.use('/register', registerRoutes); // Ruta para Register

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
