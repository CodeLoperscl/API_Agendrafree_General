import { Sequelize } from "sequelize";

const db = new Sequelize("railway", "root", "CkFePoFWIvyyNNxDfKLBMkbSHoPzwhpd", {
  host: "monorail.proxy.rlwy.net",
  dialect: "mysql",
  port: 16924,
  define: {
    createdAt: false,
    updatedAt: false,
  },
});

export default db;
