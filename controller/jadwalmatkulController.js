const { Matakuliah, JadwalMatkul } = require("../models");
const jadwalmatkulController = {};

/*
    this is auto generate example, you can continue 

*/
jadwalmatkulController.index = async (req, res) => {
  res.json({
    message: "Hello jadwalmatkulController",
  });
};

jadwalmatkulController.create = async (req, res) => {
  const { id_matkul, hari, jam } = req.body;
  try {
    const getMatkul = await Matakuliah.findOne({
      where: {
        id: id_matkul,
      },
    });
    if (getMatkul === null) {
      return res.status(404).json({
        message: `Data ID ${id_matkul} tidak ditemukan`,
      });
    } else {
      const createJadwalMatkul = await JadwalMatkul.create({
        id_matkul: id_matkul,
        hari: hari,
        jam: jam,
      });
      return res.status(200).json({
        message: "Data berhasil ditambah",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

jadwalmatkulController.getAll = async (req, res) => {
  try {
    const getJdlMatkul = await Matakuliah.findAll({
      include: [
        {
          model: JadwalMatkul,
        },
      ],
    });
    return res.status(200).json({
      data: getJdlMatkul,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

jadwalmatkulController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getJdlMatkul = await Matakuliah.findOne({
      include: [
        {
          model: JadwalMatkul,
        },
      ],
      where: {
        id: id,
      },
    });
    if (getJdlMatkul === null) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    } else {
      return res.status(200).json({
        message: "Suskses menampilkan satu data",
        data: getJdlMatkul,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

jadwalmatkulController.update = async (req, res) => {
  const { id } = req.params;
  const { id_matkul, hari, jam } = req.body;

  try {
    const getMatkul = await Matakuliah.findOne({
      where: {
        id: id_matkul,
      },
    });
    if (getMatkul === null) {
      return res.status(404).json({
        message: `Data ID ${id} tidak ditemukan`,
      });
    } else {
      const updateJdlMatkul = await JadwalMatkul.update(
        {
          id_matkul: getMatkul.id,
          hari: hari,
          jam: jam,
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

jadwalmatkulController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const getJdlMatkul = await JadwalMatkul.findOne({
      where: {
        id: id,
      },
    });
    if (getJdlMatkul === null) {
      return res.status(404).json({
        message: `Data ID ${id} tidak ditemukan`,
      });
    } else {
      const deleteJdlMatkul = await JadwalMatkul.destroy({
        where: {
          id: id,
        },
      });
      return res.status(200).json({
        message: "Data berhasil dihapus",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = jadwalmatkulController;
