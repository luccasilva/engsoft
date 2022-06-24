const { Model, DataTypes } = require('sequelize');

class Teste extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            perguntas: DataTypes.JSONB,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Prova, { foreignKey: 'teste_id', as: 'provas'});
    }
}

module.exports = Teste;