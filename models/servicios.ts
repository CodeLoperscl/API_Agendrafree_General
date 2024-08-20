import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Servicio = db.define("servicios", {
  nombre: {
    type: DataTypes.STRING,
  },
  id_especialista: {
    type: DataTypes.INTEGER,
  },
  estado: {
    type: DataTypes.INTEGER,
  },
  
});
export default Servicio;
