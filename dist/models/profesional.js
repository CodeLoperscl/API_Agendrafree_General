"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const Profesional = connection_1.default.define("profesionales", {
    habilitado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    bd_host: {
        type: sequelize_1.DataTypes.STRING,
    },
    bd_name: {
        type: sequelize_1.DataTypes.STRING,
    },
    bd_pass: {
        type: sequelize_1.DataTypes.STRING,
    },
    bd_url: {
        type: sequelize_1.DataTypes.STRING,
    },
    persona_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
});
exports.default = Profesional;
//# sourceMappingURL=profesional.js.map