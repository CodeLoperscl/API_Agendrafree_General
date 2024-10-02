"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nacionalidad_1 = require("../controllers/nacionalidad");
const validarToken_1 = require("../middlewares/validarToken");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], nacionalidad_1.getNacionalidades);
route.get("/:id", [validarToken_1.validarjwt], nacionalidad_1.getNacionalidad);
route.post("/", [validarToken_1.validarjwt], nacionalidad_1.postNacionalidad);
route.put("/:id", [validarToken_1.validarjwt], nacionalidad_1.putNacionalidad);
route.delete("/:id", [validarToken_1.validarjwt], nacionalidad_1.deleteNacionalidad);
exports.default = route;
//# sourceMappingURL=nacionalidades.js.map