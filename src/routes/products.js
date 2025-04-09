const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.list);
router.get('/search', productController.search);
router.get('/create', productController.createForm);
router.post('/create', productController.create);
router.get('/:id', productController.detail);
router.get('/edit/:id', productController.editForm);
router.post('/edit/:id', productController.update);
router.post('/delete/:id', productController.delete);

module.exports = router;
