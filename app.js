const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views')); // Asegúrate de que las vistas estén en la carpeta "views"

// Configurar sesiones
app.use(session({
    secret: 'tu_clave_secreta', // Cambia esto por una clave secreta segura
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Cambia a true si usas HTTPS
}));

// Configuración para archivos estáticos
app.use(express.static(path.join(__dirname, 'src/public')));

// Configuración para analizar el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importar rutas
const indexRoutes = require('./src/routes/index');
const authRoutes = require('./src/routes/auth'); // Importar rutas de autenticación

// Usar rutas
app.use('/', indexRoutes);
app.use('/auth', authRoutes); // Usar rutas de autenticación

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


app.use('/products', require('./routes/products'));
app.use('/users', require('./routes/users'));



const session = require('express-session');

app.use(session({
  secret: 'supersecreto', // cambiá esto por algo más seguro
  resave: false,
  saveUninitialized: false
}));



app.use((req, res, next) => {
    res.locals.user = req.session.userLogged || null;
    next();
  });
  