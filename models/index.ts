// BD paciente
import Users from "./usuario";
import Estado from "./estado";
import Persona from "./persona";
import Nacionalidades from "./nacionalidad";
import Profesional from "./profesional";
import { BelongsTo } from "sequelize";

// Establecer las asociaciones
//belongsto = 1 a 1 // buscar en la misma tabla el atributo fk
//hasmany = 1 a N // va a buscar a la otra tabla la "id"

//bd_paciente========================================
//===================================================================
//usuario - estado
Estado.hasMany(Users, { foreignKey: "estado_id" });
Users.belongsTo(Estado, { foreignKey: "estado_id" });

//===================================================================

//Persona - nacionalidad
Nacionalidades.hasMany(Persona, {foreignKey: "nacionalidad_id"}); 
Persona.belongsTo(Nacionalidades, {foreignKey: "nacionalidad_id"});
//usuario - persona
Users.hasMany(Persona, {foreignKey: "usuario_id"}); 
Persona.belongsTo(Users, {foreignKey: "usuario_id"}); 

//===================================================================

//Profesional - Persona
Persona.hasMany(Profesional, {foreignKey: "persona_id"});
Profesional.belongsTo(Persona, {foreignKey: "persona_id"});
//Profesional - estado
Estado.hasMany(Profesional, {foreignKey: "estado_id"});
Profesional.belongsTo(Estado, {foreignKey: "estado_id"});

//===================================================================

//nacionalidad - estado
Estado.hasMany(Nacionalidades, {foreignKey: "estado_id"});
Nacionalidades.belongsTo(Estado, {foreignKey: "estado_id"});

export const syncModels = async () => {
try {
    //bd_agendafree
    await Estado.sync({ alter: false });
    await Users.sync({ alter: false});
    await Nacionalidades.sync({alter: false});
    await Profesional.sync({alter: false});
    await Persona.sync({alter: false});

    console.log("Modelos sincronizados correctamente");
    } catch (error) {
    console.error("Error al sincronizar los modelos:", error);
    }
};