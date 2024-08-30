"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const route = (0, express_1.Router)();
// route.get("/", [validarjwt], getUsers);
route.get("/", usuarios_1.getUsers);
route.get("/uid/:uid", usuarios_1.getUser_uid);
route.get("/:id", usuarios_1.getUser);
route.post("/", usuarios_1.postUsuario);
route.put("/:id", usuarios_1.putUsuario);
route.delete("/:id", usuarios_1.deleteUsuario);
exports.default = route;
//# sourceMappingURL=usuario.js.map