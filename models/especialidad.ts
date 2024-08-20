import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Especialidad = db.define("especialidades", {
  nombre: {
    type: DataTypes.STRING,
  },
  id_especialista: {
    type: DataTypes.INTEGER,
  },
  abreviatura: {
    type: DataTypes.STRING,
  },
  

});
export default Especialidad;
