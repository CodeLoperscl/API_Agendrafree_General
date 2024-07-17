"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_agenda_especialista_1 = __importDefault(require("../BD/connection_agenda_especialista"));
const Hora_disponible = connection_agenda_especialista_1.default.define("horas_disponibles", {
    id_especialista: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    hora: {
        type: sequelize_1.DataTypes.TIME,
    }
});
exports.default = Hora_disponible;
//# sourceMappingURL=hora_disponible.js.map