"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Matakuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Matakuliah.belongsToMany(models.Dosen, {
        through: "DosenMatkul",
        foreignKey: "id_matkul",
      });
      Matakuliah.hasMany(models.JadwalMatkul, { foreignKey: "id_matkul" });
    }
  }
  Matakuliah.init(
    {
      kode_matkul: DataTypes.STRING,
      nama: DataTypes.STRING,
      sks: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Matakuliah",
    }
  );
  return Matakuliah;
};
