import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Hora_disponible = db_especialista.define("horas_disponibles", {
  id_especialista: {
    type: DataTypes.INTEGER,
  },
  hora: {
    type: DataTypes.TIME,
  }
  
});
export default Hora_disponible;
