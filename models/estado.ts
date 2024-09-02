import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Estados = db.define("estados", {
    estado: {
        type: DataTypes.STRING,
    },
    
});


export default Estados;
