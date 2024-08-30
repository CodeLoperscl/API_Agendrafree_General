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
Users.prototype.toJSON = function () {
  var values = Object.assign({}, this.get());

  delete values.password;
  return values;
};


export default Users;