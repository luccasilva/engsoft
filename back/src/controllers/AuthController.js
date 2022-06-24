const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

module.exports = {

    async login(req, res) {
        const { senha } = req.body;
        const current = await Usuario.findOne({
                                where: {
                                senha: senha
                                },
                            });             
        
        if(current){
            const token = jwt.sign({UsuarioId: current.id}, process.env.SECRET);
            return res.json({auth: true, token});
        }
        res.status(401).end();
    },

    async verifyJWT(req, res, next){
        const token = req.headers['x-access-token'];
        jwt.verify(token, process.env.SECRET, (error, decoded) => {
            if(error) return res.status(401).end();
            req.UsuarioId = decoded.UsuarioId;
            next();
        })
    }
}