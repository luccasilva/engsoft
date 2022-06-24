const Teste = require('../models/Teste');

module.exports = {

    async store(req, res) {
        const { nome, perguntas } = req.body;
        const teste = await Teste.create({nome, perguntas});
        return res.json(teste);
    }
}