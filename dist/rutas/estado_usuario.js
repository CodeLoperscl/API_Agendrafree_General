"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estado_usuario_1 = require("../controllers/estado_usuario");
const route = (0, express_1.Router)();
route.get("/", estado_usuario_1.getEstados_usuarios);
route.get("/:id", estado_usuario_1.getEstado_usuario);
route.post("/", estado_usuario_1.postEstado_usuario);
route.put("/:id", estado_usuario_1.putEstado_usuario);
route.delete("/:id", estado_usuario_1.deleteEstado_usuario);
exports.default = route;
//# sourceMappingURL=estado_usuario.js.map