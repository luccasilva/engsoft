const Adm = require('../models/Adm');
const jwt = require('jsonwebtoken');

module.exports = {

    async cadastroAdm(req, res) {
        const { nome, senha } = req.body;

        const crypto = require('crypto');

        const secret = process.env.ADMSECRET;
        const hash = crypto.createHmac('SHA256', secret)
            .update(senha)
            .digest('base64');

        const user = await Adm.create({
            nome: nome,
            senha: hash
        });
        return res.json(user);
    },

    async loginADM(req, res) {
        const { nome, senha } = req.body;

        var crypto = require('crypto')

        const secret = process.env.ADMSECRET;
        const hash = crypto.createHmac('SHA256', secret)
            .update(senha)
            .digest('base64');

        const current = await Adm.findOne({
            where: {
                nome: nome
            },
        });

        if (hash === current.senha) {
            const token = jwt.sign({ UsuarioId: current.id }, process.env.ADMSECRET);
            return res.json({ auth: true, token });
        } else {
            res.status(401).end();
        }
    },

    async verifyJWTADM(req, res, next) {
        const token = req.headers['x-access-token'];
        jwt.verify(token, process.env.ADMSECRET, (error, decoded) => {
            if (error) return res.status(401).end();
            req.UsuarioId = decoded.UsuarioId;
            next();
        })
    }
}