import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Tipos_archivos = db_especialista.define("tipos_archivos", {
  nombre_tipo: {
    type: DataTypes.STRING,
  },
  
});
export default Tipos_archivos;
