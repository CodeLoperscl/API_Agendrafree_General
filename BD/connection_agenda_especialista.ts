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

// const db_especialista = new Sequelize("railway", "root", "EFiceLImunJpDnXiblazNLITFWQGysay", {
//   host: "roundhouse.proxy.rlwy.net",
//   dialect: "mysql",
//   port: 39414,
//   define: {
//     createdAt: false,
//     updatedAt: false,
//   },
// });

// export default db_especialista;
