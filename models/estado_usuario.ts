import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Estados_usuarios = db.define("estados_usuarios", {
    estado: {
        type: DataTypes.STRING,
    },
});


export default Estados_usuarios;
