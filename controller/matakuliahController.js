const { Matakuliah } = require("../models");
const matakuliahController = {};

/*
    this is auto generate example, you can continue 

*/
matakuliahController.index = async (req, res) => {
  res.json({
    message: "Hello matakuliahController",
  });
};

matakuliahController.create = async (req, res) => {
  const { kode_matkul, nama, sks } = req.body;
  try {
    const createMatakuliah = await Matakuliah.create({
      kode_matkul: kode_matkul,
      nama: nama,
      sks: sks,
    });
    return res.status(201).json({
      message: "Data Berhasil Ditambahkan",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

matakuliahController.getAll = async (req, res) => {
  try {
    const getMahsiswa = await Matakuliah.findAll({
      order: [["createdAt", "DESC"]],
    });
    return res.status(200).json({
      data: getMahsiswa,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

matakuliahController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getByIdMatakuliah = await Matakuliah.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: getByIdMatakuliah,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

matakuliahController.update = async (req, res) => {
  const { kode_matkul, nama, sks } = req.body;
  const id = req.params.id;
  try {
    const getData = await Matakuliah.findOne({
      where: {
        id: id,
      },
    });
    if (getData === null) {
      return res.status(404).json({
        message: "Data tidak ada",
      });
    }
    const updateMatakuliah = await Matakuliah.update(
      {
        kode_matkul: kode_matkul,
        nama: nama,
        sks: sks,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({
      message: "Data Berhasil diubah",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

matakuliahController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const getData = await Matakuliah.findOne({
      where: {
        id: id,
      },
    });
    if (getData === null) {
      return res.status(404).json({
        message: "Data tidak ada",
      });
    }
    const deleteMatakuliah = await Matakuliah.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
module.exports = matakuliahController;
