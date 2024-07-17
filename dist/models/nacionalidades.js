"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../BD/connection"));
const Nacionalidades = connection_1.default.define("nacionalidades", {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
Nacionalidades.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());
    return values;
};
exports.default = Nacionalidades;
//# sourceMappingURL=nacionalidades.js.map