const express = require("express");
const mhsbimbinganController = require("../controller/mhsbimbinganController");
const routeMhsBimbingan = express.Router();

routeMhsBimbingan.post("/create", mhsbimbinganController.create);
routeMhsBimbingan.get("/get", mhsbimbinganController.getAll);
routeMhsBimbingan.get("/get/:id", mhsbimbinganController.getById);
routeMhsBimbingan.put("/update/:id", mhsbimbinganController.update);
routeMhsBimbingan.delete("/delete/:id", mhsbimbinganController.delete);

module.exports = routeMhsBimbingan;
