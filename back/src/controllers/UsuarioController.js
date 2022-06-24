const Usuario = require('../models/Usuario');
const Prova = require('../models/Prova');
const jwt = require('jsonwebtoken');

module.exports = {

    async cadastro(req, res) {
        const { nome, modalidade } = req.body;

        let aux = true;
        let senha = 0;
        while(aux){
            senha = Math.floor(Math.random() * (999999 - 100000)) + 100000;
            let current = await Usuario.findOne({
                where: {
                    senha: senha,
                },
            });
            if (current) {
                aux = true;
            }
            else{
                aux = false;
            }
        }

        const user = await Usuario.create({nome: nome,
                                           senha: senha, 
                                           modalidade: modalidade, 
                                           status: "ativo"});
        return res.json(user);
    },

    async deletar(req, res) {
        const { id } = req.body;

        const test = await Prova.destroy({
            where: {
                usuario_id: id,
            },
        });

        const current = await Usuario.destroy({
            where: {
                id: id
            },
        });
        return res.status(200).end();
    },

    async arquivar(req, res) {
        const { user, data } = req.body;
        const current = await Usuario.findOne({
            where: {
                id: user
            },
        });

        if (current) {
            await Usuario.update({
                status: data
            }, {
                where: {
                    id: current.id
                }
            })
            return res.status(200).end();
        }
        return res.status(401).end();
    },

    async verUsuario(req, res) {
        const { usuario_id } = req.body;
        const user = await Usuario.findByPk(usuario_id, {
            include: [{
                association: 'provas'
            }]
        });
        return res.json(user);
    },

    async arquivados(req, res) {
        const { data } = req.body;
        let all = await Usuario.findAll({
            where: {
                modalidade: data,
                status: 'arquivado'
            },
            include: { association: 'provas'}
        });
        return res.json(all);
    },

    async listar(req, res) {
        let all = await Usuario.findAll({
            where: {
                status: 'ativo'
            },
            include: { association: 'provas'}
        });
        return res.json(all);
    }
}