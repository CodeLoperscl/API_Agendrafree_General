"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarToken_1 = require("../middlewares/validarToken");
const clientes_1 = require("../controllers/clientes");
const route = (0, express_1.Router)();
route.get("/", [validarToken_1.validarjwt], clientes_1.getClientes);
route.get("/:id", [validarToken_1.validarjwt], clientes_1.getCliente);
route.get("/run/:run", [validarToken_1.validarjwt], clientes_1.getCliente_rut);
route.post("/", [validarToken_1.validarjwt], clientes_1.postCliente);
route.put("/:id", [validarToken_1.validarjwt], clientes_1.putCliente);
exports.default = route;
//# sourceMappingURL=cliente.js.map