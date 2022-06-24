const SolveController = require('./SolveController');
const Usuario = require('../models/Usuario');
const Prova = require('../models/Prova');

module.exports = {

    async listar(req, res) {
        const user = await Usuario.findByPk(req.UsuarioId, {
            include: { association: 'provas' }
        });
        return res.json(user);
    },

    async aplicar(req, res) {
        const { usuario_id, teste_id } = req.body;
        const aplicacao = await Prova.create({
            usuario_id: usuario_id,
            teste_id: teste_id,
            status: "APLICADO",
            respostas: null,
            resultado: null
        });
        return res.json(aplicacao);
    },

    async resultado(req, res) {
        const { usuario_id, teste_id } = req.body;
        const user = await Usuario.findByPk(usuario_id, {
            include: [{
                association: 'provas',
                where: {
                    teste_id: teste_id
                },
            }]
        });
        return res.json(user);
    },

    async responder(req, res) {
        const { form, data } = req.body;
        const current = await Prova.findOne({
            where: {
                usuario_id: req.UsuarioId,
                teste_id: form
            },
        });

        let resultadoTeste = null;

        if (current) {
            switch (form) {
                case 1:
                    resultadoTeste = await SolveController.solveAIP(data);
                    break;
                case 2:
                    resultadoTeste = await SolveController.solveAPPG(data);
                    break;
                case 3:
                    resultadoTeste = await SolveController.solveFICHA(data);

                    await Usuario.update({
                        nome: data.nome
                    }, {
                        where: {
                            id: req.UsuarioId
                        }
                    })

                    break;
                case 4:
                    resultadoTeste = await SolveController.solveG36(data);
                    break;
                case 5:
                    resultadoTeste = await SolveController.solveII(data);
                    break;
                case 6:
                    resultadoTeste = await SolveController.solvePF(data);
                    break;
                case 7:
                    resultadoTeste = await SolveController.solveSDS(data);
                    break;
                default:
                    throw new Error ("id inválido");
            }
            await Prova.update({
                respostas: data,
                resultado: resultadoTeste
            }, {
                where: {
                    id: current.id
                }
            })
            return res.status(200).end();
        }
        return res.status(401).end();
    },

    async atualizar(req, res) {
        const { user, form, data } = req.body;
        const current = await Prova.findOne({
            where: {
                usuario_id: user,
                teste_id: form
            },
        });

        let resultadoTeste = null;

        if (current) {
            switch (form) {
                case 3:
                    resultadoTeste = await SolveController.solveFICHA(data);
                    break;
                default:
                    throw new Error ("id inválido");
            }
            await Prova.update({
                respostas: data,
                resultado: resultadoTeste
            }, {
                where: {
                    id: current.id
                }
            })

            await Usuario.update({
                nome: data.nome
            }, {
                where: {
                    id: user
                }
            })

            return res.status(200).end();
        }
        return res.status(401).end();
    },

    async cancelar(req, res) {
        const { usuario_id, teste_id } = req.body;
        const current = await Prova.destroy({
            where: {
                usuario_id: usuario_id,
                teste_id: teste_id
            },
        });
        return res.status(200).end();
    }
}