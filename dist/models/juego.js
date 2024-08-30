"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_agenda_especialista_1 = __importDefault(require("../BD/connection_agenda_especialista"));
// const Juego = db_especialista.define("juegos", {
//   nombre: {
//     type: DataTypes.STRING,
//   }
// });
// export default Juego;
// Modelo Juego en af_especialista
const Juego = connection_agenda_especialista_1.default.define('juegos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'juegos',
});
exports.default = Juego;
//# sourceMappingURL=juego.js.map