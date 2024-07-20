import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Estado = db_especialista.define("estados", {
  estado: {
    type: DataTypes.STRING,
  },
  
});
export default Estado;
