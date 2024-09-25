import { DataTypes } from "sequelize";
import db from "../BD/connection";
//import Estados_usuarios from "./estado_usuario";

const Users = db.define("usuarios", {
  uid: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  estado_id: {
    type: DataTypes.INTEGER,
      
  },
});
// Sobrescribir el método toJSON para excluir el campo password
Users.prototype.toJSON = function () {
  var values = Object.assign({}, this.get());

  // Excluir el campo password
  delete values.password;
  
  return values;
};

export default Users;