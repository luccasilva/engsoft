const Curso = require('../models/Curso')

module.exports = {

    async cadastrarProfissao(req, res) {
        const { nome, descricao, site } = req.body;
        const prof = await Curso.create({
            nome: nome,
            descricao: descricao,
            site: site
        });
        return res.json(prof);
    },

    async listarProfissoes(req, res) {
        let all = await Curso.findAll({});
        return res.json(all);
    },

    async atualizarProfissao(req, res) {
        const { id, nome, descricao, site } = req.body;
        const current = await Curso.findOne({
            where: {
                id: id
            },
        });
        
        if (current) {
            await Curso.update({
                nome: nome,
                descricao: descricao,
                site: site
            }, {
                where: {
                    id: id
                }
            })
            return res.status(200).end();
        }
        return res.status(401).end();
    },

    async apagarProfissao(req, res) {
        const { id } = req.body;
        const current = await Curso.destroy({
            where: {
                id: id
            },
        });
        return res.status(200).end();
    },

    async verProfissao(req, res) {
        const { id } = req.body;
        const user = await Curso.findByPk(id, {} );
        return res.json(user);
    }

}