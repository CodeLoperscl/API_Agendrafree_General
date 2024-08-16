"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//const db = new Sequelize("bd_agendafree", "root", "", {
//  host: "localhost",
//  dialect: "mysql",
//  define: {
//    createdAt: false,
//    updatedAt: false,
//  },
//});
//export default db;
// BD conectada a railway
const DB_PACIENTE = process.env.DB_PACIENTE || "agendafree";
const USERNAME_DB_PACIENTE = process.env.USERNAME_DB_PACIENTE || "root";
const PASSWORD_DB_PACIENTE = process.env.PASSWORD_DB_PACIENTE || "";
const HOST_DB_PACIENTE = process.env.HOST_DB_PACIENTE || "localhost";
const PORT_DB_PACIENTE = parseInt(process.env.PORT_DB_PACIENTE || "16924", 10);
const db = new sequelize_1.Sequelize(DB_PACIENTE, USERNAME_DB_PACIENTE, PASSWORD_DB_PACIENTE, {
    host: HOST_DB_PACIENTE,
    dialect: "mysql",
    port: PORT_DB_PACIENTE,
    define: {
        createdAt: false,
        updatedAt: false,
    },
});
exports.default = db;
//# sourceMappingURL=connection.js.map