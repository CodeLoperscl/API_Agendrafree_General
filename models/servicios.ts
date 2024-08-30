import { DataTypes } from "sequelize";
import db from "../BD/connection";
import db_especialista from "../BD/connection_agenda_especialista";

const Servicio = db_especialista.define("servicios", {
  nombre: {
    type: DataTypes.STRING,
  },
  especialista_id: {
    type: DataTypes.INTEGER,
  },
  estado_id: {
    type: DataTypes.INTEGER,
  },
});
export default Servicio;
