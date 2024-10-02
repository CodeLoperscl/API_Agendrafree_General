"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const maqueta_1 = require("../controllers/maqueta");
const validarToken_1 = require("../middlewares/validarToken");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], maqueta_1.getMaquetas);
route.get("/:id", [validarToken_1.validarjwt], maqueta_1.getMaqueta);
route.post("/", [validarToken_1.validarjwt], maqueta_1.postMaqueta);
route.put("/:id", [validarToken_1.validarjwt], maqueta_1.putMaqueta);
route.delete("/:id", [validarToken_1.validarjwt], maqueta_1.deleteMaqueta);
exports.default = route;
//# sourceMappingURL=maqueta.js.map