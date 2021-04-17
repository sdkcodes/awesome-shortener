'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShortLink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ShortLink.init({
    full_url: DataTypes.STRING,
    short_url: DataTypes.STRING,
    short_code: DataTypes.STRING,
    clicks: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShortLink',
  });
  return ShortLink;
};