import { Sequelize } from "sequelize";
const db_especialista = new Sequelize("af_especialista", "root", "", {
host: "localhost",
dialect: "mysql",
define: {
  createdAt: false,
  updatedAt: false,
},
});
export default db_especialista;

// const DB_AGENDA_ESPECIALISTA = process.env.DB_AGENDA_ESPECIALISTA || "agendafree-especialista";
// const USERNAME_DB_AGENDA_ESPECIALISTA = process.env.USERNAME_DB_AGENDA_ESPECIALISTA || "root";
// const PASSWORD_DB_AGENDA_ESPECIALISTA = process.env.PASSWORD_DB_AGENDA_ESPECIALISTA ||  "";
// const HOST_DB_AGENDA_ESPECIALISTA = process.env.HOST_DB_AGENDA_ESPECIALISTA ||  "localhost";
// const PORT_DB_AGENDA_ESPECIALISTA = parseInt(process.env.PORT_DB_AGENDA_ESPECIALISTA || "39414", 10);


// const db_especialista = new Sequelize(DB_AGENDA_ESPECIALISTA, USERNAME_DB_AGENDA_ESPECIALISTA, PASSWORD_DB_AGENDA_ESPECIALISTA, {
// host: HOST_DB_AGENDA_ESPECIALISTA,
// dialect: "mysql",
// port: PORT_DB_AGENDA_ESPECIALISTA,
// define: {
//   createdAt: false,
//   updatedAt: false,
// },
// });

// export default db_especialista;
