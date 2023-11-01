"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MhsBimbingan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MhsBimbingan.init(
    {
      id:{
        type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true
      },
      id_mahasiswa: DataTypes.INTEGER,
      id_dosen: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MhsBimbingan",
    }
  );
  return MhsBimbingan;
};
