"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estado_cita_1 = require("../controllers/estado_cita");
const route = (0, express_1.Router)();
route.get("/", estado_cita_1.getEstados_citas);
route.get("/:id", estado_cita_1.getEstado_cita);
route.post("/", estado_cita_1.postEstado_cita);
route.put("/:id", estado_cita_1.putEstado_cita);
route.delete("/:id", estado_cita_1.deleteEstado_cita);
exports.default = route;
//# sourceMappingURL=estado_cita.js.map