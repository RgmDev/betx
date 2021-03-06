'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class League extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      League.belongsTo(models.Country, {foreignKey: 'countryId', as: 'country'})
    }
  };
  League.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'League',
  });
  return League;
};