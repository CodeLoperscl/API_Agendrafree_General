"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const Especialista = connection_1.default.define("especialistas", {
    habilitado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    bd_host: {
        type: sequelize_1.DataTypes.STRING,
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    rut: {
        type: sequelize_1.DataTypes.STRING,
    },
    id_nacionalidad: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    fono: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    }
});
exports.default = Especialista;
//# sourceMappingURL=espe.js.map