'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Stats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teamId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Teams',
          key: 'id'
        }
      },
      num_matches: {
        type: Sequelize.INTEGER
      },
      num_matches_finished: {
        type: Sequelize.INTEGER
      },
      wins: {
        type: Sequelize.INTEGER
      },
      per_wins: {
        type: Sequelize.DECIMAL(12, 10)
      },
      losses: {
        type: Sequelize.INTEGER
      },
      per_losses: {
        type: Sequelize.DECIMAL(12, 10)
      },
      ties: {
        type: Sequelize.INTEGER
      },
      per_ties: {
        type: Sequelize.DECIMAL(12, 10)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Stats');
  }
};