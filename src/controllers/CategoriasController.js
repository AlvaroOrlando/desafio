const Categorias = require('../models/Categorias');

module.exports = {
    async store(req, res) {
        const { codigo, titulo, status } = req.body;
        const categorias = await Categorias.create({ codigo, titulo, status })

        return res.json(categorias);
    }  
};