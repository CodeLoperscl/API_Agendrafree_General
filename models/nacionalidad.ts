import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Nacionalidades = db.define("nacionalidades", {
    nombre: {
        type: DataTypes.STRING,
    },
    estado_id: {
        type: DataTypes.INTEGER,
    }
});

export default Nacionalidades;
