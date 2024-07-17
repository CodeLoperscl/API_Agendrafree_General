import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Persona = db.define("persona", {
  nombre: {
    type: DataTypes.STRING,
  },
  apellido: {
    type: DataTypes.STRING,
  },
  rut: {
    type: DataTypes.STRING,
  },
  id_nacionalidad: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
  },
  fono: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
  }
  
});
export default Persona;
