"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_agenda_especialista_1 = __importDefault(require("../BD/connection_agenda_especialista"));
const Cita = connection_agenda_especialista_1.default.define("citas", {
    fecha: {
        type: sequelize_1.DataTypes.DATE,
    },
    estado_cita_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    paciente_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    prevision_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    especialista_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    hora_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
});
exports.default = Cita;
//# sourceMappingURL=cita.js.map