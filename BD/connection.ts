import { Sequelize } from "sequelize";
// const db = new Sequelize("agendafree_bd", "root", "", {
// host: "localhost",
// dialect: "mysql",
// define: {
//   createdAt: false,
//   updatedAt: false,
// },
// });
// export default db;


// BD conectada a railway
let DB_PACIENTE = "agendafree_bd";
let USERNAME_DB_PACIENTE =  "root";
let PASSWORD_DB_PACIENTE = "";
let HOST_DB_PACIENTE = "localhost";
let PORT_DB_PACIENTE =  3306;
if(process.env.HOST_DB_PACIENTE){  
  DB_PACIENTE = process.env.DB_PACIENTE|| "agendafree";
  USERNAME_DB_PACIENTE = process.env.USERNAME_DB_PACIENTE || "root";
  PASSWORD_DB_PACIENTE = process.env.PASSWORD_DB_PACIENTE || "";
  HOST_DB_PACIENTE = process.env.HOST_DB_PACIENTE || "localhost";
  PORT_DB_PACIENTE = parseInt(process.env.PORT_DB_PACIENTE || "3306", 10);
}
console.log("CONECTADO A: ",HOST_DB_PACIENTE);

const db = new Sequelize(DB_PACIENTE, USERNAME_DB_PACIENTE, PASSWORD_DB_PACIENTE, {
host: HOST_DB_PACIENTE,
dialect: "mysql",
port: PORT_DB_PACIENTE,
define: {
  createdAt: false,
  updatedAt: false,
},
});
export default db;