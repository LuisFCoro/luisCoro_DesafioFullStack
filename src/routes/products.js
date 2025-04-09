const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Crear producto
router.get('/create', productController.createForm);
router.post('/create', productController.store);

// Listar productos
router.get('/', productController.index);

// Ver detalle de producto
router.get('/:id', productController.detail);

// Editar producto
router.get('/:id/edit', productController.editForm);
router.put('/:id', productController.update);

// Eliminar producto
router.delete('/:id', productController.destroy);

module.exports = router;
