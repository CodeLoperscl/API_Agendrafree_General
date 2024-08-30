"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jugador_1 = require("../controllers/jugador");
const route = (0, express_1.Router)();
route.get("/", jugador_1.getJugadores);
route.get("/:id", jugador_1.getJugador);
route.post("/", jugador_1.postJugador);
route.put("/:id", jugador_1.putJugador);
route.delete("/:id", jugador_1.deleteJugador);
exports.default = route;
//# sourceMappingURL=jugador.js.map