const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/register', userController.registerForm);
router.post('/register', userController.register);
router.get('/profile/:id', userController.profile);
router.get('/edit/:id', userController.editForm);
router.post('/edit/:id', userController.update);

module.exports = router;
