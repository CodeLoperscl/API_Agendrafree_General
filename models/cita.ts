import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Cita = db_especialista.define("citas", {
  fecha: {
    type: DataTypes.DATE,
  },
  estado_cita_id: {
    type: DataTypes.INTEGER,
  },
  paciente_id: {
    type: DataTypes.INTEGER,
  },
  prevision_id: {
    type: DataTypes.INTEGER,
  },
  especialista_id: {
    type: DataTypes.INTEGER,
  },
  hora_id: {
    type: DataTypes.INTEGER,
  },
  
});
export default Cita;
