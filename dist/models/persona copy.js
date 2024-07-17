"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const Persona = connection_1.default.define("persona", {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
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
exports.default = Persona;
//# sourceMappingURL=persona%20copy.js.map