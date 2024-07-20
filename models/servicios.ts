import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Servicio = db_especialista.define("servicios", {
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
