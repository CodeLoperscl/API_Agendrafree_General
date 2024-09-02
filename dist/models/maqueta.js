"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const Maqueta = connection_1.default.define("maqueta", {
    entero: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    string: {
        type: sequelize_1.DataTypes.STRING,
    }
});
exports.default = Maqueta;
//# sourceMappingURL=maqueta.js.map