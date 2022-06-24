'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.dropTable('aplicacoes');
  },

  async down (queryInterface, Sequelize) {
  }
};
