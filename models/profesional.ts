import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Profesional = db.define("profesionales", {
  persona_id: {
    type: DataTypes.INTEGER,
  },
  habilitado: {
    type: DataTypes.BOOLEAN,
  },
  ruta_api: {
    type: DataTypes.STRING,
  },
  
});
export default Profesional;
