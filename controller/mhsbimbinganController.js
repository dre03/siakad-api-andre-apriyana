const { Mahasiswa, Dosen, MhsBimbingan } = require("../models");
const mhsbimbinganController = {};

/*
    this is auto generate example, you can continue 

*/
mhsbimbinganController.index = async (req, res) => {
  res.json({
    message: "Hello mhsbimbinganController",
  });
};

mhsbimbinganController.getAll = async (req, res) => {
  const getMhsBimbingan = await Dosen.findAll({
    include: [
      {
        model: Mahasiswa,
      },
    ],
  });
  return res.status(200).json({
    data: getMhsBimbingan,
  });
};

mhsbimbinganController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getMhsBimbingan = await Dosen.findOne({
      include: [
        {
          model: Mahasiswa,
        },
      ],
      where: {
        id: id,
      },
    });
    if (getMhsBimbingan === null) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    } else {
      return res.status(200).json({
        data: getMhsBimbingan,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

mhsbimbinganController.create = async (req, res) => {
  const { id_mahasiswa, id_dosen } = req.body;
  try {
    const getMhs = await Mahasiswa.findOne({
      where: {
        id: id_mahasiswa,
      },
    });
    const getDosen = await Dosen.findOne({
      where: {
        id: id_dosen,
      },
    });
    if (getMhs === null || getDosen === null) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    } else {
      const createMhsBimbingan = await MhsBimbingan.create({
        id_mahasiswa: getMhs.id,
        id_dosen: getDosen.id,
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

mhsbimbinganController.update = async (req, res) => {
  const { id_mahasiswa, id_dosen } = req.body;
  const { id } = req.params;
  try {
    const getMhs = await Mahasiswa.findOne({
      where: {
        id: id_mahasiswa,
      },
    });
    const getDosen = await Dosen.findOne({
      where: {
        id: id_dosen,
      },
    });
    if (getDosen === null || getMhs === null) {
      return res.status(404).json({
        message: `Data ID ${id} tidak ditemukan`,
      });
    } else {
      const updateMhsBimbingan = await MhsBimbingan.update(
        {
          id_mahasiswa: id_mahasiswa,
          id_dosen: id_dosen,
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

mhsbimbinganController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const getMhsBimbingan = await MhsBimbingan.findOne({
      where: {
        id: id
      },
    });
    if (getMhsBimbingan === null) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    } else {
      const deleteMhsBimbingan = await MhsBimbingan.destroy({
        where: {
          id: id,
        },
      });
      return res.status(200).json({
        message: "Data Berhasil dihapus",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = mhsbimbinganController;
