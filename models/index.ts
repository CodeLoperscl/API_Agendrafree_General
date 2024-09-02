// BD paciente
import Users from "./usuario";
import Estados_usuarios from "./estado_usuario";
import Persona from "./persona";
import Nacionalidades from "./nacionalidad";
import Profesional from "./profesional";
// BD especialista
import Cita from "./cita";
import Estado_Cita from "./estados";
import Paciente from "./paciente";
import Hora_disponible from "./hora_disponible";
import Especialista from "./especialista";
import Prevision from "./prevision";
import Estado from "./estados";
import Archivo from "./archivo";
import Especialidad from "./especialidad";
import Tipos_archivos from "./tipo_archivo";
import Servicio from "./servicios";
import { BelongsTo } from "sequelize";



// Establecer las asociaciones
//belongsto = 1 a 1
//hasmany = 1 a N

//bd_paciente========================================
//usuario
Estados_usuarios.hasMany(Users, { foreignKey: "estado_id" });
Users.belongsTo(Estados_usuarios, { foreignKey: "estado_id" });
//Persona
Nacionalidades.hasMany(Persona, {foreignKey: "nacionalidad_id"}); //FK nacionalidad_id
Persona.belongsTo(Nacionalidades, {foreignKey: "nacionalidad_id"});//FK nacionalidad_id
Users.hasMany(Persona, {foreignKey: "usuario_id"}); //FK usuario_id
Persona.belongsTo(Users, {foreignKey: "usuario_id"}); //FK usuario_id
//has manny = va a buscar a la otra tabla la "id"
//BELONG TO = buscar en la misma tabla el atributo fk
//targetkey
Profesional.belongsTo(Persona, {foreignKey: "persona_id"});//FK especialista_id
Persona.hasMany(Profesional, {foreignKey: "persona_id"});


//bd_paciente========================================

//Archivo ===========================================
//Archivo - cita_id FK
Cita.hasMany(Archivo, {foreignKey: "cita_id"}); //FK cita_id
Archivo.belongsTo(Cita, {foreignKey: "cita_id"}); //FK cita_id
//Archivo

//Especialidad
Especialidad.belongsTo(Especialista, {foreignKey: "especialista_id"});//FK especialista_id
Especialista.hasMany(Especialidad, {foreignKey: "especialista_id"});

// //especialista x -> especialidades
// Especialista.belongsTo(Especialidad, {foreignKey: "id_especialidad"})

export const syncModels = async () => {
try {
    //bd_agendafree
    await Estados_usuarios.sync({ alter: false });
    await Users.sync({ alter: false});
    await Nacionalidades.sync({alter: false});
    await Profesional.sync({alter: false});
    await Persona.sync({alter: false});

    // //bd agendafree_especialista
    // await Cita.sync({ alter: false });
    // await Estado_Cita.sync({ alter: false });
    // await Paciente.sync({ alter: false });
    // await Prevision.sync({ alter: false });
    // await Estado.sync({ alter: false });
    // await Archivo.sync({ alter: false });
    // await Tipos_archivos.sync({ alter: false });
    // await Especialista.sync({ alter: false });
    // await Especialidad.sync({ alter: false });
    // await Servicio.sync({ alter: false });
    // await Hora_disponible.sync({ alter: false });


    console.log("Modelos sincronizados correctamente");
    } catch (error) {
    console.error("Error al sincronizar los modelos:", error);
    }
};