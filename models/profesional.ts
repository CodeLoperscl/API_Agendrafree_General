import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Profesional = db.define("profesionales", {
  bd_host: {
    type: DataTypes.STRING,
  },
  bd_name: {
    type: DataTypes.STRING,
  },
  bd_pass: {
    type: DataTypes.STRING,
  },
  bd_url: {
    type: DataTypes.STRING,
  },
  persona_id: {
    type: DataTypes.INTEGER,
  },
  estado_id: {
    type: DataTypes.INTEGER,
}
  
});
export default Profesional;
