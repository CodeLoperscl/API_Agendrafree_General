"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const Estados_usuarios = connection_1.default.define("estados_usuarios", {
    estado: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = Estados_usuarios;
//# sourceMappingURL=estado_usuario.js.map