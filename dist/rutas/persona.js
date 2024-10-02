"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarToken_1 = require("../middlewares/validarToken");
const persona_1 = require("../controllers/persona");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], persona_1.getPersonas);
route.get("/rut/:rut", [validarToken_1.validarjwt], persona_1.getPersona_rut);
route.get("/:id", [validarToken_1.validarjwt], persona_1.getPersona);
route.post("/", [validarToken_1.validarjwt], persona_1.postPersona);
route.put("/:id", [validarToken_1.validarjwt], persona_1.putPersona);
route.delete("/:id", [validarToken_1.validarjwt], persona_1.deletePersona);
exports.default = route;
//# sourceMappingURL=persona.js.map