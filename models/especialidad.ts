import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Especialidad = db_especialista.define("especialidades", {
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
