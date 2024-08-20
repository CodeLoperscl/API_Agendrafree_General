import { Sequelize } from "sequelize";
const db = new Sequelize("af_paciente", "root", "", {
host: "localhost",
dialect: "mysql",
define: {
  createdAt: false,
  updatedAt: false,
},
});
export default db;


// BD conectada a railway
// const DB_PACIENTE = process.env.DB_PACIENTE || "agendafree";
// const USERNAME_DB_PACIENTE = process.env.USERNAME_DB_PACIENTE || "root";
// const PASSWORD_DB_PACIENTE = process.env.PASSWORD_DB_PACIENTE || "";
// const HOST_DB_PACIENTE = process.env.HOST_DB_PACIENTE || "localhost";
// const PORT_DB_PACIENTE = parseInt(process.env.PORT_DB_PACIENTE || "16924", 10);

// const db = new Sequelize(DB_PACIENTE, USERNAME_DB_PACIENTE, PASSWORD_DB_PACIENTE, {
// host: HOST_DB_PACIENTE,
// dialect: "mysql",
// port: PORT_DB_PACIENTE,
// define: {
//   createdAt: false,
//   updatedAt: false,
// },
// });
// export default db;