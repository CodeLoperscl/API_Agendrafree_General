import { Sequelize } from "sequelize";

const db_especialista = new Sequelize("bd_agendafree_especialista", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    createdAt: false,
    updatedAt: false,
  },
});

export default db_especialista;
