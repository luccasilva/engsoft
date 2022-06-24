'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('provas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'usuarios', key: 'id' },
        unUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      teste_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'testes', key: 'id' },
        unUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      respostas: {
        type: Sequelize.JSONB,
      },
      resultado: {
        type: Sequelize.JSONB,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('provas');
  }
};
