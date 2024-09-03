"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_1 = require("../controllers/persona");
const route = (0, express_1.Router)();
route.get("/", persona_1.getPersonas);
route.get("/rut/:rut", persona_1.getPersona_rut);
route.get("/:id", persona_1.getPersona);
route.post("/", persona_1.postPersona);
// route.put("/:id", putPersona);
// route.delete("/:id", deletePersona);
exports.default = route;
//# sourceMappingURL=persona.js.map