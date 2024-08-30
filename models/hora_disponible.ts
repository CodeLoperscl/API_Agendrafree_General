import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Hora_disponible = db_especialista.define("horas_disponibles", {
  hora: {
    type: DataTypes.TIME,
  },
  especialista_id: {
    type: DataTypes.INTEGER,
  },
  estado_id: {
    type: DataTypes.INTEGER,
    
  }
  
  
});
export default Hora_disponible;
