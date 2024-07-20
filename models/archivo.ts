import { DataTypes } from "sequelize";
import db_especialista from "../BD/connection_agenda_especialista";

const Archivo = db_especialista.define("archivos", {
  id_cita: {
    type: DataTypes.INTEGER,
  },
  id_tipoArchivo: {
    type: DataTypes.INTEGER,
  },
  ruta_archivo: {
    type: DataTypes.STRING,
  },
  id_estado_abono: {
    type: DataTypes.STRING,
  },
  
});
export default Archivo;
