"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estado_1 = require("../controllers/estado");
const validarToken_1 = require("../middlewares/validarToken");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], estado_1.getEstados);
route.get("/:id", [validarToken_1.validarjwt], estado_1.getEstado);
route.post("/", [validarToken_1.validarjwt], estado_1.postEstado);
route.put("/:id", [validarToken_1.validarjwt], estado_1.putEstado);
route.delete("/:id", [validarToken_1.validarjwt], estado_1.deleteEstado);
exports.default = route;
//# sourceMappingURL=estado.js.map