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


// console.log("CONEXIONNN", process.env);
// const db = new Sequelize(process.env.BDNA || "bd_agendafree", process.env.BDUA || "root" , process.env.BDPA || "", {
//   host: "monorail.proxy.rlwy.net",
//   dialect: "mysql",
//   port: 16924,
//   //Number(process.env.BDPTA) || 
//   define: {
//     createdAt: false,
//     updatedAt: false,
//   },
// });
// export default db;


// BD conectada a railway
// const db = new Sequelize("railway", "root", "CkFePoFWIvyyNNxDfKLBMkbSHoPzwhpd", {
//   host: "monorail.proxy.rlwy.net",
//   dialect: "mysql",
//   port: 16924,
//   define: {
//     createdAt: false,
//     updatedAt: false,
//   },
// });
// export default db;
