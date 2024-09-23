"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const Profesional = connection_1.default.define("profesionales", {
    persona_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    habilitado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    ruta_api: {
        type: sequelize_1.DataTypes.STRING,
    },
    max_dias_atencion: {
        type: sequelize_1.DataTypes.INTEGER,
    },
});
exports.default = Profesional;
//# sourceMappingURL=profesional.js.map