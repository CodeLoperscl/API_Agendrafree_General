import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Especialista = db_especialista.define("especialistas", {
  uid: {
    type: DataTypes.STRING,
  },
  hora_minima_abono: {
    type: DataTypes.INTEGER,
  },
  id_persona: {
    type: DataTypes.INTEGER
  },
  bd_name: {
    type: DataTypes.STRING,
  },
  bd_user: {
    type: DataTypes.STRING,
  },
  bd_pass: {
    type: DataTypes.STRING,
  },
  bd_url: {
    type: DataTypes.STRING,
  }
  
});
export default Especialista;
