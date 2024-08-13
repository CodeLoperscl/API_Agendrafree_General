import Cita from "./cita";
import Estado_Cita from "./estados";
import Estados_usuarios from "./estado_usuario";
import Users from "./usuario";
import Paciente from "./paciente";
import Hora_disponible from "./hora_disponible";
import Especialista from "./especialista";
import Prevision from "./prevision";
import Persona from "./persona";
import Nacionalidades from "./nacionalidad";
import Estado from "./estados";
import Archivo from "./archivo";
import Especialidad from "./especialidad";
import Tipos_archivos from "./tipo_archivo";
import Servicio from "./servicios";



// Establecer las asociaciones
//belongsto = 1 a 1
//hasmany = 1 a N

//bd_agendafree
Estados_usuarios.hasMany(Users, { foreignKey: "estado" });
Users.belongsTo(Estados_usuarios, { foreignKey: "estado" });

Nacionalidades.hasMany(Persona, {foreignKey: "id_nacionalidad"})
Persona.belongsTo(Nacionalidades, {foreignKey: "id_nacionalidad"})

//bd_agendafree_especialista   CITA -> X
Cita.belongsTo(Estado_Cita, {foreignKey: "id_estado"})
Cita.belongsTo(Paciente, {foreignKey: "id_paciente"})
Cita.belongsTo(Especialista, {foreignKey: "id_especialista"})
Cita.belongsTo(Prevision, {foreignKey: "id_prevision"})
Cita.belongsTo(Hora_disponible, {foreignKey: "id_hora"})
//bd_agendafree_especialista X - >Cita
Estado_Cita.hasMany(Cita, {foreignKey: "id_estado"})
Paciente.hasMany(Cita, {foreignKey: "id_paciente"})
Especialista.hasMany(Cita, {foreignKey: "id_especialista"})
Prevision.hasMany(Cita, {foreignKey: "id_prevision"})
Hora_disponible.hasMany(Cita, {foreignKey: "id_hora"})


//bd_agendafree_especialista
// Cita.belongsTo(Estado_Cita, {foreignKey: "id_estado"})
// Estado_Cita.hasMany(Cita, {foreignKey: "id_estado"})

//CITA 1 a -> x
// Cita.belongsTo(Estado_Cita, {foreignKey: "id_estado"});
// Cita.belongsTo(Paciente, {foreignKey: "id_paciente"});
// Cita.belongsTo(Especialista, {foreignKey: "id_especialista"});
// Cita.belongsTo(Hora_disponible, {foreignKey: "id_hora"});
// Cita.belongsTo(Prevision, {foreignKey: "id_prevision"});
// //Cita x -> Cita
// Estado_Cita.hasMany(Cita, {foreignKey: "id_estado"});
// Paciente.hasMany(Cita, {foreignKey: "id_paciente"});
// Especialista.hasMany(Cita, {foreignKey: "id_especialista"});
// Hora_disponible.hasMany(Cita, {foreignKey: "id_hora"});
// Prevision.hasMany(Cita, {foreignKey: "id_prevision"});

// //especialista x -> especialidades
// Especialista.belongsTo(Especialidad, {foreignKey: "id_especialidad"})




export const syncModels = async () => {
try {
    //bd_agendafree
    await Estados_usuarios.sync({ alter: false });
    await Users.sync({ alter: false});
    await Nacionalidades.sync({alter: false});
    await Persona.sync({alter: false});

    //bd agendafree_especialista
    await Cita.sync({ alter: false });
    await Estado_Cita.sync({ alter: false });
    await Paciente.sync({ alter: false });
    await Prevision.sync({ alter: false });
    await Estado.sync({ alter: false });
    await Archivo.sync({ alter: false });
    await Tipos_archivos.sync({ alter: false });
    await Especialista.sync({ alter: false });
    await Especialidad.sync({ alter: false });
    await Servicio.sync({ alter: false });
    await Hora_disponible.sync({ alter: false });


    console.log("Modelos sincronizados correctamente");
    } catch (error) {
    console.error("Error al sincronizar los modelos:", error);
    }
};