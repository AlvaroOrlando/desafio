const Categorias = require('../models/Categorias');

module.exports = {
    async store(req, res) {
        const { codigo, titulo, status } = req.body;
        const categorias = await Categorias.create({ codigo, titulo, status })

        return res.json(categorias);
    },
    async getById(req,res) {
        const { id } = req.params;
        const categorias = await Categorias.findByPk(id);

        return res.json(categorias);
    },
    async getAll(req,res) {
        const categorias = await Categorias.findAll();
        return res.json(categorias);
    },
    async update(req,res) {
        const { id } = req.params;
        const { codigo, titulo, status } = req.body;
        const categorias = await Categorias.update({ codigo, titulo, status }, { where: { id } });
        return res.json(categorias);
    }
};