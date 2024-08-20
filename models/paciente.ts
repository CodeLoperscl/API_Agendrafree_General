import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Paciente = db.define("pacientes", {
  uid: {
    type: DataTypes.STRING,
  },
  id_persona: {
    type: DataTypes.INTEGER,
  },
  id_prevision: {
    type: DataTypes.INTEGER,
  }
  
});
export default Paciente;
