"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_agenda_especialista_1 = __importDefault(require("../BD/connection_agenda_especialista"));
const Paciente = connection_agenda_especialista_1.default.define("pacientes", {
    persona_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    prevision_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    estado_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
});
exports.default = Paciente;
//# sourceMappingURL=paciente.js.map