"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarToken_1 = require("../middlewares/validarToken");
const profesional_1 = require("../controllers/profesional");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], profesional_1.getProfesionales);
route.get("/:id", [validarToken_1.validarjwt], profesional_1.getProfesional);
route.post("/", [validarToken_1.validarjwt], profesional_1.postProfesional);
route.put("/:id", [validarToken_1.validarjwt], profesional_1.putProfesional);
route.delete("/:id", [validarToken_1.validarjwt], profesional_1.deleteProfesional);
exports.default = route;
//# sourceMappingURL=profesional.js.map