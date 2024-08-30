"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const especialidad_1 = require("../controllers/especialidad");
const route = (0, express_1.Router)();
route.get("/", especialidad_1.getEspecialidades);
route.get("/:id", especialidad_1.getEspecialidad);
route.post("/", especialidad_1.postEspecialidad);
route.put("/:id", especialidad_1.putEspecialidad);
route.delete("/:id", especialidad_1.deleteEspecialidad);
exports.default = route;
//# sourceMappingURL=especialidad%20copy.js.map