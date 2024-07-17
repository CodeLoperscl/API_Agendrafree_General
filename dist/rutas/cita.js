"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cita_1 = require("../controllers/cita");
const route = (0, express_1.Router)();
route.get("/", cita_1.getCitas);
route.get("/:id", cita_1.getCita);
route.post("/", cita_1.postCita);
route.put("/:id", cita_1.putCita);
route.delete("/:id", cita_1.deleteCita);
exports.default = route;
//# sourceMappingURL=cita.js.map