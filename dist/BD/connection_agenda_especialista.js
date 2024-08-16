"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//const db_especialista = new Sequelize("bd_agendafree_especialista", "root", "", {
//  host: "localhost",
//  dialect: "mysql",
//  define: {
//    createdAt: false,
//    updatedAt: false,
//  },
//});
//export default db_especialista;
const DB_AGENDA_ESPECIALISTA = process.env.DB_AGENDA_ESPECIALISTA || "agendafree-especialista";
const USERNAME_DB_AGENDA_ESPECIALISTA = process.env.USERNAME_DB_AGENDA_ESPECIALISTA || "root";
const PASSWORD_DB_AGENDA_ESPECIALISTA = process.env.PASSWORD_DB_AGENDA_ESPECIALISTA || "";
const HOST_DB_AGENDA_ESPECIALISTA = process.env.HOST_DB_AGENDA_ESPECIALISTA || "localhost";
const PORT_DB_AGENDA_ESPECIALISTA = parseInt(process.env.PORT_DB_AGENDA_ESPECIALISTA || "39414", 10);
const db_especialista = new sequelize_1.Sequelize(DB_AGENDA_ESPECIALISTA, USERNAME_DB_AGENDA_ESPECIALISTA, PASSWORD_DB_AGENDA_ESPECIALISTA, {
    host: HOST_DB_AGENDA_ESPECIALISTA,
    dialect: "mysql",
    port: PORT_DB_AGENDA_ESPECIALISTA,
    define: {
        createdAt: false,
        updatedAt: false,
    },
});
exports.default = db_especialista;
//# sourceMappingURL=connection_agenda_especialista.js.map