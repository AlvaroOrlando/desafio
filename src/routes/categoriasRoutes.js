const express = require('express');
const router = express.Router();
const CategoriasController = require('../controllers/CategoriasController');

//POST - Create a new Category
router.post('/', CategoriasController.store); 
router.get('/:id', CategoriasController.getById); 
router.get('/', CategoriasController.getAll); 

module.exports = router;