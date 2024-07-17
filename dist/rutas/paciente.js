"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paciente_1 = require("../controllers/paciente");
const route = (0, express_1.Router)();
route.get("/", paciente_1.getPacientes);
route.get("/:id", paciente_1.getPaciente);
route.post("/", paciente_1.postPaciente);
route.put("/:id", paciente_1.putPaciente);
route.delete("/:id", paciente_1.deletePaciente);
exports.default = route;
//# sourceMappingURL=paciente.js.map