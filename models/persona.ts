import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Persona = db.define("personas", {
  nombre: {
    type: DataTypes.STRING,
  },
  apellido: {
    type: DataTypes.STRING,
  },
  rut: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  fono: {
    type: DataTypes.STRING,
  },
  nacionalidad_id: {
    type: DataTypes.INTEGER,
  },
  usuario_id: {
    type: DataTypes.INTEGER,
  },
  
  
});
export default Persona;
