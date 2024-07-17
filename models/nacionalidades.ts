import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Nacionalidades = db.define("nacionalidades", {
    nombre: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    },
});
Nacionalidades.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());

    return values;
};
export default Nacionalidades;
