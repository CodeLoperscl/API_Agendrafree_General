import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Paciente = db_especialista.define("pacientes", {
  persona_id: {
    type: DataTypes.INTEGER,
  },
  prevision_id: {
    type: DataTypes.INTEGER,
  },
  estado_id: {
    type: DataTypes.INTEGER,
  },
  
});
export default Paciente;
