"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nacionalidad_1 = require("../controllers/nacionalidad");
const route = (0, express_1.Router)();
route.get("/", nacionalidad_1.getNacionalidades);
route.get("/:id", nacionalidad_1.getNacionalidad);
route.post("/", nacionalidad_1.postNacionalidad);
route.put("/:id", nacionalidad_1.putNacionalidad);
route.delete("/:id", nacionalidad_1.deleteNacionalidad);
exports.default = route;
//# sourceMappingURL=nacionalidades%20copy.js.map