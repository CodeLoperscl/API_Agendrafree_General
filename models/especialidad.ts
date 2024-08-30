import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Especialidad = db_especialista.define("especialidades", {
  especialidad: {
    type: DataTypes.STRING,
  },
  abreviatura: {
    type: DataTypes.STRING,
  },
  especialista_id: {
    type: DataTypes.INTEGER,
  },
  estado_id: {
    type:DataTypes.INTEGER,
  },
  

});
export default Especialidad;
