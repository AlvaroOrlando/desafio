const Estoques = require('../models/Estoques');

module.exports = {
    async getById(req,res) {
        const { id } = req.params;
        const estoques = await Estoques.findByPk(id);
        return res.json(estoques);
    },

    async update(req,res) {
        const { id } = req.params;

        const { quantidade, reserva, status  } = req.body;
        
        const estoques = await Estoques.update({
            quantidade, 
            reserva, 
            status 
        },{ where: { id } });
        return res.json(estoques);
    },
    
    async delete(req,res){
        res.status(501)
        .json({
             error: 'Not implemented',
             message:'Não se pode deletar um estoque'
        });
    }
};