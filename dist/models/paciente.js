"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const Paciente = connection_1.default.define("pacientes", {
    uid: {
        type: sequelize_1.DataTypes.STRING,
    },
    id_persona: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    id_prevision: {
        type: sequelize_1.DataTypes.INTEGER,
    }
});
exports.default = Paciente;
//# sourceMappingURL=paciente.js.map