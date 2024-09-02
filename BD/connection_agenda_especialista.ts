import { Sequelize } from "sequelize";
const db_especialista = new Sequelize("agendafree_especialista_bd", "root", "", {
host: "localhost",
dialect: "mysql",
define: {
  createdAt: false,
  updatedAt: false,
},
});
export default db_especialista;
// let DB_AGENDA_ESPECIALISTA = "agendafree_especialista_bd";
// let USERNAME_DB_AGENDA_ESPECIALISTA = "root";
// let PASSWORD_DB_AGENDA_ESPECIALISTA = "";
// let HOST_DB_AGENDA_ESPECIALISTA = "localhost";
// let PORT_DB_AGENDA_ESPECIALISTA = 3306;
// if (process.env.DB_AGENDA_ESPECIALISTA) {
//   DB_AGENDA_ESPECIALISTA = process.env.DB_AGENDA_ESPECIALISTA || "agendafree-especialista";
//   USERNAME_DB_AGENDA_ESPECIALISTA = process.env.USERNAME_DB_AGENDA_ESPECIALISTA || "root";
//   PASSWORD_DB_AGENDA_ESPECIALISTA = process.env.PASSWORD_DB_AGENDA_ESPECIALISTA || "";
//   HOST_DB_AGENDA_ESPECIALISTA = process.env.HOST_DB_AGENDA_ESPECIALISTA || "localhost";
//   PORT_DB_AGENDA_ESPECIALISTA = parseInt(process.env.PORT_DB_AGENDA_ESPECIALISTA || "3306", 10);
// }


// const db_especialista = new Sequelize(DB_AGENDA_ESPECIALISTA, USERNAME_DB_AGENDA_ESPECIALISTA, PASSWORD_DB_AGENDA_ESPECIALISTA, {
//   host: HOST_DB_AGENDA_ESPECIALISTA,
//   dialect: "mysql",
//   port: PORT_DB_AGENDA_ESPECIALISTA,
//   define: {
//     createdAt: false,
//     updatedAt: false,
//   },
// });

// export default db_especialista;
