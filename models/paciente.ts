import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Paciente = db_especialista.define("pacientes", {
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
