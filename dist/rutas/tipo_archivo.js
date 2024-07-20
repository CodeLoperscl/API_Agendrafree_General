"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipo_archivo_1 = require("../controllers/tipo_archivo");
const route = (0, express_1.Router)();
route.get("/", tipo_archivo_1.getTipos_Archivos);
route.get("/:id", tipo_archivo_1.getTipo_Archivo);
route.post("/", tipo_archivo_1.postTipo_Archivo);
route.put("/:id", tipo_archivo_1.putTipo_Archivo);
route.delete("/:id", tipo_archivo_1.deleteTipo_Archivo);
exports.default = route;
//# sourceMappingURL=tipo_archivo.js.map