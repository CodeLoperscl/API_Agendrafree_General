"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// /src/routes/userRoutes.ts
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
// Ruta para registrar al usuario
router.post("/", userController_1.registerUser);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map