"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const Jugador = connection_1.default.define("jugadores", {
    username: {
        type: sequelize_1.DataTypes.STRING,
    },
    id_juego: {
        type: sequelize_1.DataTypes.INTEGER,
    }
});
exports.default = Jugador;
//# sourceMappingURL=jugador.js.map