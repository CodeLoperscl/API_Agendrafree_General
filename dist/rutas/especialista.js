"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const especialista_1 = require("../controllers/especialista");
const route = (0, express_1.Router)();
route.get("/", especialista_1.getEspecialistas);
route.get("/:id", especialista_1.getEspecialista);
route.post("/", especialista_1.postEspecialista);
route.put("/:id", especialista_1.putEspecialista);
route.delete("/:id", especialista_1.deleteEspecialista);
exports.default = route;
//# sourceMappingURL=especialista.js.map