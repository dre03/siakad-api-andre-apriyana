const experss = require("express");
const jadwalmatkulController = require("../controller/jadwalmatkulController");
const routeJadwalMatkul = experss.Router();

routeJadwalMatkul.post("/", jadwalmatkulController.create);
routeJadwalMatkul.get("/get", jadwalmatkulController.getAll);
routeJadwalMatkul.get("/get/:id", jadwalmatkulController.getById);
routeJadwalMatkul.put("/update/:id", jadwalmatkulController.update);
routeJadwalMatkul.delete("/delete/:id", jadwalmatkulController.delete)

module.exports = routeJadwalMatkul;
