"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dosen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dosen.belongsToMany(models.Matakuliah, {
        through: "DosenMatkul",
        foreignKey: "id_dosen",
      });
      Dosen.belongsToMany(models.Mahasiswa, {
        through: "MhsBimbingan",
        foreignKey: "id_dosen",
      });
    }
  }
  Dosen.init(
    {
      nidn: DataTypes.STRING,
      nama: DataTypes.STRING,
      alamat: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Dosen",
    }
  );
  return Dosen;
};
