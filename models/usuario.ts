import { DataTypes } from "sequelize";
import db from "../BD/connection";
//import Estados_usuarios from "./estado_usuario";

const Users = db.define("usuario", {
  uid: {
    type: DataTypes.STRING,
  },
  user_name: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
      
  },
});
Users.prototype.toJSON = function () {
  var values = Object.assign({}, this.get());

  delete values.password;
  return values;
};
// Users.belongsTo(Estados_usuarios, {
//   foreignKey: 'estado'
// });


  

export default Users;