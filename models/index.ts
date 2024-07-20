import Cita from "./cita";
import Estado_Cita from "./estados";
import Estados_usuarios from "./estado_usuario";
import Users from "./usuario";
import Paciente from "./paciente";
import Hora_disponible from "./hora_disponible";
import Especialista from "./especialista";
import Prevision from "./prevision";
import Persona from "./persona";


// Establecer las asociaciones
//belongsto = 1 a 1
//hasmany = 1 a N
Estados_usuarios.hasMany(Users, { foreignKey: "estado" });
Users.belongsTo(Estados_usuarios, { foreignKey: "estado" });


//CITA 1 a -> x
Cita.belongsTo(Estado_Cita, {foreignKey: "id_estado"});
Cita.belongsTo(Paciente, {foreignKey: "id_paciente"});
Cita.belongsTo(Especialista, {foreignKey: "id_especialista"});
Cita.belongsTo(Hora_disponible, {foreignKey: "id_hora"});
Cita.belongsTo(Prevision, {foreignKey: "id_prevision"});
//Cita x -> Cita
Estado_Cita.hasMany(Cita, {foreignKey: "id_estado"});
Paciente.hasMany(Cita, {foreignKey: "id_paciente"});
Especialista.hasMany(Cita, {foreignKey: "id_especialista"});
Hora_disponible.hasMany(Cita, {foreignKey: "id_hora"});
Prevision.hasMany(Cita, {foreignKey: "id_prevision"});


export const syncModels = async () => {
try {
    await Estados_usuarios.sync({ alter: false });
    await Users.sync({ alter: false});
    await Estado_Cita.sync({ alter: false });
    await Cita.sync({ alter: false });
    await Paciente.sync({ alter: false });
    await Especialista.sync({ alter: false });
    await Hora_disponible.sync({ alter: false });
    await Prevision.sync({ alter: false });

    console.log("Modelos sincronizados correctamente");
    } catch (error) {
    console.error("Error al sincronizar los modelos:", error);
    }
};