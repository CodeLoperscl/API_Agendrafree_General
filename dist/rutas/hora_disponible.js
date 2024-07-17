"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hora_disponible_1 = require("../controllers/hora_disponible");
const route = (0, express_1.Router)();
route.get("/", hora_disponible_1.getHoras_disponibles);
route.get("/:id", hora_disponible_1.getHora_disponible);
route.post("/", hora_disponible_1.postHora_disponible);
route.put("/:id", hora_disponible_1.putHora_disponible);
route.delete("/:id", hora_disponible_1.deleteHora_disponible);
exports.default = route;
//# sourceMappingURL=hora_disponible.js.map