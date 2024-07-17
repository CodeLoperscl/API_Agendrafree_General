"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_especialista = new sequelize_1.Sequelize("bd_agendafree_especialista", "root", "", {
    host: "localhost",
    dialect: "mysql",
    define: {
        createdAt: false,
        updatedAt: false,
    },
});
exports.default = db_especialista;
//# sourceMappingURL=connection_agenda_especialista.js.map