import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Hora_disponible = db.define("horas_disponibles", {
  id_especialista: {
    type: DataTypes.INTEGER,
  },
  hora: {
    type: DataTypes.TIME,
  }
  
});
export default Hora_disponible;
