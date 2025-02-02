const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/', loginController.renderLogin);
router.post('/', loginController.processLogin);

module.exports = router;
