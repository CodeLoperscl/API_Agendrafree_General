"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const Especialidad = connection_1.default.define("especialidades", {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    id_especialista: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    abreviatura: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = Especialidad;
//# sourceMappingURL=especialidad.js.map