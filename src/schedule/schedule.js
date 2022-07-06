const Categorias = require('../models/Categorias');
const Produtos = require('../models/Produtos');
const Estoques = require('../models/Estoques');

const schedule = require('node-schedule');

const scheduleData = _ => {
    schedule.scheduleJob('*/1 * * * *', async function() {
        const categorias = await Categorias.findAll();
        const produtos = await Produtos.findAll();
        const estoques = await Estoques.findAll();

        const client = require('../config/dabatasePG');
        
        await client.query(`DROP TABLE IF EXISTS categorias CASCADE`);

        await client.query(
            `CREATE TABLE IF NOT EXISTS categorias(
                id SERIAL PRIMARY KEY,
                codigo VARCHAR(255) NOT NULL,
                titulo VARCHAR(255) NOT NULL,
                status INT NOT NULL
            )`
        );

        categorias.forEach(categoria => {
            client.query(
                `INSERT INTO categorias(id, codigo, titulo, status)
                 VALUES ($1, $2, $3, $4)`,
                 [categoria.id, categoria.codigo, categoria.titulo, categoria.status]
            );
        });

        await client.query(`DROP TABLE IF EXISTS produtos CASCADE`);

        await client.query(
            `CREATE TABLE IF NOT EXISTS produtos(
                id SERIAL PRIMARY KEY NOT NULL, 
                idCategoria INT NULL REFERENCES categorias(id) ON DELETE SET NULL ON UPDATE CASCADE, 
                codigo VARCHAR NOT NULL,
                nome VARCHAR NOT NULL, 
                descricao TEXT NOT NULL, 
                valor DECIMAL NOT NULL, 
                status INT NOT NULL)
            `);

        produtos.forEach(produto => {
            client.query
                (`INSERT INTO produtos(id, idCategoria, codigo, nome, descricao, valor, status)
                 VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                 [produto.id, produto.idCategoria, produto.codigo, produto.nome, produto.descricao, produto.valor, produto.status]
            );
        });
        
        await client.query(`DROP TABLE IF EXISTS estoques CASCADE`);

        await client.query(
            `CREATE TABLE IF NOT EXISTS estoques (
                id SERIAL PRIMARY KEY NOT NULL, 
                idProduto INT NULL, 
                quantidade INT NOT NULL DEFAULT 0, 
                reserva INT NULL, status INT NULL, 
                UNIQUE (idProduto), FOREIGN KEY (idProduto) REFERENCES produtos (id) ON DELETE CASCADE
            )`
        );
        
        estoques.forEach(estoque => {
            client.query
                (`INSERT INTO estoques (id, idProduto, quantidade, reserva, status)
                VALUES ($1, $2, $3, $4, $5)`,
                [estoque.id, estoque.idProduto, estoque.quantidade, estoque.reserva, estoque.status]
            );
        });
    });
};


module.exports = scheduleData();