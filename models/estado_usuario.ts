import { DataTypes } from "sequelize";
import db from "../BD/connection";
import Users from "./usuario";

const Estados_usuarios = db.define("estados_usuarios", {
    estado: {
        type: DataTypes.STRING,
    },
});

Estados_usuarios.hasMany(Users, {
    foreignKey: 'estado'
});

export default Estados_usuarios;
