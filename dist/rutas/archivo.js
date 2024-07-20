"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const archivo_1 = require("../controllers/archivo");
const route = (0, express_1.Router)();
route.get("/", archivo_1.getArchivos);
route.get("/:id", archivo_1.getArchivo);
route.post("/", archivo_1.postArchivo);
route.put("/:id", archivo_1.putArchivo);
route.delete("/:id", archivo_1.deleteArchivo);
exports.default = route;
//# sourceMappingURL=archivo.js.map