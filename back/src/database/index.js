const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Adm = require('../models/Adm');
const Teste = require('../models/Teste');
const Curso = require('../models/Curso');
const Prova = require('../models/Prova');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Adm.init(connection);
Teste.init(connection);
Curso.init(connection);
Prova.init(connection);

Usuario.associate(connection.models);
Teste.associate(connection.models);
Prova.associate(connection.models);

module.exports = connection;