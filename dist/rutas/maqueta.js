"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const maqueta_1 = require("../controllers/maqueta");
const route = (0, express_1.Router)();
route.get("/", maqueta_1.getMaquetas);
route.get("/:id", maqueta_1.getMaqueta);
route.post("/", maqueta_1.postMaqueta);
route.put("/:id", maqueta_1.putMaqueta);
route.delete("/:id", maqueta_1.deleteMaqueta);
exports.default = route;
//# sourceMappingURL=maqueta.js.map