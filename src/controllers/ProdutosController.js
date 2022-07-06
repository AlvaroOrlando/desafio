const Produtos = require('../models/Produtos');
const Categorias = require('../models/Categorias');
const Estoques = require('../models/Estoques');

module.exports = {
    async store(req, res) {
        const { idCategoria } = req.params;

        const { codigo, nome, descricao, valor, status } = req.body;

        const categorias = await Categorias.findByPk(idCategoria)

        if(!categorias){
            return res.status(400).json({
                error: 'Categoria não encontrada'
            });
        };
        
        const produtos = await Produtos.create({
             idCategoria, 
             codigo, 
             nome, 
             descricao, 
             valor, 
             status 
        });

        const produto = await Produtos.findByPk(produtos.id);

        const estoques = await Estoques.create({
             quantidade:0, 
             idProduto: produto.id 
        });
        return res.json({ produtos, estoques });
    },
    
    async getById(req,res) {
        const { id } = req.params;
        const produtos = await Produtos.findByPk(id);
        return res.json(produtos);
    },

    async getAll(req,res) {
        const produtos = await Produtos.findAll();
        return res.json(produtos);
    },

    async update(req,res) {
        const { id } = req.params;

        const { codigo, nome, descricao, valor, status } = req.body;

        const produtos = await Produtos.update({
             codigo, 
             nome, 
             descricao, 
             valor, 
             status 
        },
        { where: { id } }
        );
        return res.json(produtos);
    },

    async delete(req,res) {
        const { id } = req.params;
        const produtos = await Produtos.destroy({ where: { id } });
        return res.json(produtos);
    }
};