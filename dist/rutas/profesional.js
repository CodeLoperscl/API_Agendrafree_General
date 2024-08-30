"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesional_1 = require("../controllers/profesional");
const route = (0, express_1.Router)();
route.get("/", profesional_1.getProfesionales);
route.get("/:id", profesional_1.getProfesional);
route.post("/", profesional_1.postProfesional);
route.put("/:id", profesional_1.putProfesional);
route.delete("/:id", profesional_1.deleteProfesional);
exports.default = route;
//# sourceMappingURL=profesional.js.map