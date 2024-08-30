"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const juego_1 = require("../controllers/juego");
const route = (0, express_1.Router)();
route.get("/", juego_1.getJuegos);
route.get("/:id", juego_1.getJuego);
route.post("/", juego_1.postJuego);
route.put("/:id", juego_1.putJuego);
route.delete("/:id", juego_1.deleteJuego);
exports.default = route;
//# sourceMappingURL=juego.js.map