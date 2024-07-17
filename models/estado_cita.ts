import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Estado_Cita = db_especialista.define("estados_citas", {
  estado: {
    type: DataTypes.STRING,
  },
  
});
export default Estado_Cita;
