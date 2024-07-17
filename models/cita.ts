import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Cita = db_especialista.define("citas", {
  fecha: {
    type: DataTypes.DATE,
  },
  id_estado: {
    type: DataTypes.INTEGER,
  },
  id_paciente: {
    type: DataTypes.INTEGER,
  },
  id_especialista: {
    type: DataTypes.INTEGER,
  },
  id_prevision: {
    type: DataTypes.INTEGER,
  },
  id_hora: {
    type: DataTypes.INTEGER,
  },
  
});
export default Cita;
