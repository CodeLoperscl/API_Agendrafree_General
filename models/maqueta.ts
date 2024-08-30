import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Maqueta = db.define("maqueta", {
    entero: {
        type: DataTypes.INTEGER,
    },
    string: {
        type: DataTypes.STRING,
    }
});


export default Maqueta;
