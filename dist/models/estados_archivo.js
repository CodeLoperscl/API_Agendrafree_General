"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_agenda_especialista_1 = __importDefault(require("../BD/connection_agenda_especialista"));
const Archivo = connection_agenda_especialista_1.default.define("archivos", {
    id_cita: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    id_tipoArchivo: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    ruta_archivo: {
        type: sequelize_1.DataTypes.STRING,
    },
    id_estado_abono: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = Archivo;
//# sourceMappingURL=estados_archivo.js.map