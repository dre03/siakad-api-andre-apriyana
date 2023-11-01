const express = require("express");
const dosenmatkulController = require("../controller/dosenmatkulController");
const routeDosenMatkul = express.Router();

routeDosenMatkul.post("/", dosenmatkulController.create);
routeDosenMatkul.get("/get", dosenmatkulController.getAll);
routeDosenMatkul.get("/get/:id", dosenmatkulController.getById);
routeDosenMatkul.put("/update/:id", dosenmatkulController.update);
routeDosenMatkul.delete("/delete/:id", dosenmatkulController.delete);

module.exports = routeDosenMatkul;
