"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estado_1 = require("../controllers/estado");
const route = (0, express_1.Router)();
route.get("/", estado_1.getEstados);
route.get("/:id", estado_1.getEstado);
route.post("/", estado_1.postEstado);
route.put("/:id", estado_1.putEstado);
route.delete("/:id", estado_1.deleteEstado);
exports.default = route;
//# sourceMappingURL=estado.js.map