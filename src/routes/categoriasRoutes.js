const express = require('express');
const router = express.Router();
const CategoriasController = require('../controllers/CategoriasController');

//POST - Create a new Category
router.post('/', CategoriasController.store); 

//GET - Get all Categories
router.get('/', CategoriasController.getAll); 

//GET - Get a Category by id
router.get('/:id', CategoriasController.getById); 

//PUT - Update a Category
router.patch('/:id', CategoriasController.update);

//DELETE - Delete a Category
router.delete('/:id', CategoriasController.delete);

module.exports = router;