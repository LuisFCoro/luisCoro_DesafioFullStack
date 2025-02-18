const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
    res.render('index', { user: req.session.user }); // Pasar el usuario a la vista // Renderiza index.ejs
});

module.exports = router;