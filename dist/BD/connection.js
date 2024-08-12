"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("railway", "root", "CkFePoFWIvyyNNxDfKLBMkbSHoPzwhpd", {
    host: "monorail.proxy.rlwy.net",
    dialect: "mysql",
    port: 16924,
    define: {
        createdAt: false,
        updatedAt: false,
    },
});
exports.default = db;
//# sourceMappingURL=connection.js.map