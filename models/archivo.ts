import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Archivo = db_especialista.define("archivos", {
  ruta_archivo: {
    type: DataTypes.STRING,
  },
  cita_id: {
    type: DataTypes.INTEGER,
  },
  tipo_archivo_id: {
    type: DataTypes.INTEGER,
  },
  estado_id: {
    type: DataTypes.INTEGER,
  },
  
});
export default Archivo;
