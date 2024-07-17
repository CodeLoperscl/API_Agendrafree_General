import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Prevision = db_especialista.define("previsiones", {
  nombre: {
    type: DataTypes.STRING,
  }
  
});
export default Prevision;
