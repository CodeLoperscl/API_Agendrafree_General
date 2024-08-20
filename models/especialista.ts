import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Especialista = db.define("especialistas", {
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
