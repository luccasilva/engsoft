const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            senha: DataTypes.INTEGER,
            modalidade: DataTypes.STRING,
            status: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Prova, { foreignKey: 'usuario_id', as: 'provas'});
    }
}

module.exports = Usuario;