import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Nacionalidades = db.define("nacionalidades", {
    nombre: {
        type: DataTypes.STRING,
    },
});

export default Nacionalidades;
