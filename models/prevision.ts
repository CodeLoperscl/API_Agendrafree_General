import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Prevision = db.define("previsiones", {
  nombre: {
    type: DataTypes.STRING,
  }
  
});
export default Prevision;
