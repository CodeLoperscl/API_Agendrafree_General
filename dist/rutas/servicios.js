"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const servicios_1 = require("../controllers/servicios");
const route = (0, express_1.Router)();
route.get("/", servicios_1.getServicios);
route.get("/:id", servicios_1.getServicio);
route.post("/", servicios_1.postServicio);
route.put("/:id", servicios_1.putServicio);
route.delete("/:id", servicios_1.deleteServicio);
exports.default = route;
//# sourceMappingURL=servicios.js.map