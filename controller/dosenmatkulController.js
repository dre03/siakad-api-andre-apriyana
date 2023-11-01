const { Dosen, Matakuliah, DosenMatkul } = require("../models");
const dosenmatkulController = {};

/*
    this is auto generate example, you can continue 

*/
dosenmatkulController.index = async (req, res) => {
  res.json({
    message: "Hello dosenmatkulController",
  });
};

dosenmatkulController.create = async (req, res) => {
  const { id_dosen, id_matkul } = req.body;
  try {
    const getDosen = await Dosen.findOne({
      where: {
        id: id_dosen,
      },
    });
    const getMatkul = await Matakuliah.findOne({
      where: {
        id: id_matkul,
      },
    });
    if (getDosen === null || getMatkul === null) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    } else {
      const createDsMatkul = await DosenMatkul.create({
        id_dosen: getDosen.id,
        id_matkul: getMatkul.id,
      });
      return res.status(201).json({
        message: "Data berhasil ditambah",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

dosenmatkulController.getAll = async (req, res) => {
  const getDsMatkul = await Dosen.findAll({
    include: [
      {
        model: Matakuliah,
      },
    ],
  });
  return res.status(200).json({
    data: getDsMatkul,
  });
};

dosenmatkulController.getById = async (req, res) => {
  const { id } = req.params;
  const getDsMatkul = await Dosen.findOne({
    include: [
      {
        model: Matakuliah,
      },
    ],
    where: {
      id: id,
    },
  });
  return res.status(200).json({
    data: getDsMatkul,
  });
};

dosenmatkulController.update = async (req, res) => {
  const { id_dosen, id_matkul } = req.body;
  const { id } = req.params;
  try {
    const getDosen = await Dosen.findOne({
      where: {
        id: id_dosen,
      },
    });
    const getMatkul = await Matakuliah.findOne({
      where: {
        id: id_matkul,
      },
    });
    if (getDosen === null || getMatkul === null) {
      throw Error("Data tidak ditemukan");
    } else {
      const updateDsMatkul = await DosenMatkul.update(
        {
          id_dosen: id_dosen,
          id_matkul: id_matkul,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return res.status(200).json({
        message: "Data berhasil diubah",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

dosenmatkulController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteDsMatkul = await DosenMatkul.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: "Data Berhasil dihapus",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = dosenmatkulController;
