import { Sequelize } from "sequelize";

const db = new Sequelize("bd_agendafree", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    createdAt: false,
    updatedAt: false,
  },
});

export default db;
