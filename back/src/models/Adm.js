const { Model, DataTypes } = require('sequelize');

class Adm extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            senha: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = Adm;