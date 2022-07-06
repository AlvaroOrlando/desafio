const express = require('express');
const router = express.Router();
const ProdutosController = require('../controllers/ProdutosController');
const EstoquesController = require('../controllers/EstoquesController');

// POST create a new product
router.post('/:idCategoria', ProdutosController.store);

// GET get all products
router.get('/', ProdutosController.getAll);

// GET get a product by id
router.get('/:id', ProdutosController.getById);

// PATCH update a product
router.patch('/:id', ProdutosController.update);

// DELETE delete a product
router.delete('/:id', ProdutosController.delete);

//GET get inventory by id
router.get('/:id/estoque', EstoquesController.getById);

//PATCH update inventory
router.patch('/:id/estoque', EstoquesController.update);

//DELETE delete inventory
router.delete('/:id/estoque', EstoquesController.delete);

module.exports = router;