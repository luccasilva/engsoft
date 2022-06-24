const { Model, DataTypes } = require('sequelize');

class Prova extends Model {
    static init(sequelize){
        super.init({
            usuario_id: DataTypes.INTEGER,
            teste_id: DataTypes.INTEGER,
            status: DataTypes.STRING,
            respostas: DataTypes.JSONB,
            resultado: DataTypes.JSONB,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario'});
        this.belongsTo(models.Teste, { foreignKey: 'teste_id', as: 'teste'});
    }
}

module.exports = Prova;