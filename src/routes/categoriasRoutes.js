const express = require('express');
const router = express.Router();
const CategoriasController = require('../controllers/CategoriasController');

//POST - Create a new Category
router.post('/', CategoriasController.store); 

module.exports = router;