import Cita from "./cita";
import Estado_Cita from "./estado_cita";
import Estados_usuarios from "./estado_usuario";
import Users from "./usuario";


// Establecer las asociaciones
Estados_usuarios.hasMany(Users, { foreignKey: "estado" });
Users.belongsTo(Estados_usuarios, { foreignKey: "estado" });
Estado_Cita.hasMany(Cita, {foreignKey: "id_estado"});
Cita.belongsTo(Estado_Cita, {foreignKey: "id_estado"});


export const syncModels = async () => {
try {
    await Estados_usuarios.sync({ alter: true });
    await Users.sync({ alter: true });
    await Estado_Cita.sync({ alter: false });
    await Cita.sync({ alter: false });

    console.log("Modelos sincronizados correctamente");
    } catch (error) {
    console.error("Error al sincronizar los modelos:", error);
    }
};