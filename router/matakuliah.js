const express = require("express");
const matakulaihController = require("../controller/matakuliahController");
const routeMatakuliah = express.Router();

routeMatakuliah.post("/", matakulaihController.create);
routeMatakuliah.get("/get", matakulaihController.getAll);
routeMatakuliah.get("/get/:id", matakulaihController.getById);
routeMatakuliah.put("/update/:id", matakulaihController.update);
routeMatakuliah.delete("/delete/:id", matakulaihController.delete);

module.exports = routeMatakuliah;
