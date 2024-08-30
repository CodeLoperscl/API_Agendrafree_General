import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Especialista = db_especialista.define("especialistas", {
  hora_minima_abono: {
    type: DataTypes.INTEGER,
  },
  persona_id: {
    type: DataTypes.INTEGER,
  },
  estado_id: {
    type:DataTypes.INTEGER,
  },
});
export default Especialista;
