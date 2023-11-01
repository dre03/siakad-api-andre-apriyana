'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JadwalMatkul extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JadwalMatkul.belongsTo(models.Matakuliah, {foreignKey: "id_matkul"});
    }
  }
  JadwalMatkul.init({
    id_matkul: DataTypes.INTEGER,
    hari: DataTypes.STRING,
    jam: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'JadwalMatkul',
  });
  return JadwalMatkul;
};