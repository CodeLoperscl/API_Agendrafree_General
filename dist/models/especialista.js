"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_agenda_especialista_1 = __importDefault(require("../BD/connection_agenda_especialista"));
const Especialista = connection_agenda_especialista_1.default.define("especialistas", {
    hora_minima_abono: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    persona_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    estado_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
});
exports.default = Especialista;
//# sourceMappingURL=especialista.js.map