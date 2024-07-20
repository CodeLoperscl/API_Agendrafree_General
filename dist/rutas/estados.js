"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estados_1 = require("../controllers/estados");
const route = (0, express_1.Router)();
route.get("/", estados_1.getEstados);
route.get("/:id", estados_1.getEstado);
route.post("/", estados_1.postEstado);
route.put("/:id", estados_1.putEstado);
route.delete("/:id", estados_1.deleteEstado);
exports.default = route;
//# sourceMappingURL=estados.js.map