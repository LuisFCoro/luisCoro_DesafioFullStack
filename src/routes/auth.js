const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para mostrar la página de registro
router.get('/register', (req, res) => {
    res.render('users/register', { user: req.session.user });
});

// Ruta para manejar el envío del formulario de registro
router.post('/register', authController.register);


// Ruta para manejar el envío del formulario de login
router.post('/login', authController.login);

module.exports = router;