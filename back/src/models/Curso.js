const { Model, DataTypes } = require('sequelize');

class Curso extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            site: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Curso;