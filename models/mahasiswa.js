"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mahasiswa.belongsToMany(models.Dosen, {
        through: "MhsBimbingan",
        foreignKey: "id_mahasiswa",
      });
    }
  }
  Mahasiswa.init(
    {
      nama: DataTypes.STRING,
      nim: DataTypes.STRING,
      alamat: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Mahasiswa",
    }
  );
  return Mahasiswa;
};
