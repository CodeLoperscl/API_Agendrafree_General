"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const Prevision = connection_1.default.define("previsiones", {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    }
});
exports.default = Prevision;
//# sourceMappingURL=prevision.js.map