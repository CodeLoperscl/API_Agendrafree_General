"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncModels = void 0;
// BD paciente
const usuario_1 = __importDefault(require("./usuario"));
const estado_usuario_1 = __importDefault(require("./estado_usuario"));
const persona_1 = __importDefault(require("./persona"));
const nacionalidad_1 = __importDefault(require("./nacionalidad"));
const profesional_1 = __importDefault(require("./profesional"));
// BD especialista
const cita_1 = __importDefault(require("./cita"));
const especialista_1 = __importDefault(require("./especialista"));
const archivo_1 = __importDefault(require("./archivo"));
const especialidad_1 = __importDefault(require("./especialidad"));
// Establecer las asociaciones
//belongsto = 1 a 1
//hasmany = 1 a N
//bd_paciente========================================
//usuario
estado_usuario_1.default.hasMany(usuario_1.default, { foreignKey: "estado_id" });
usuario_1.default.belongsTo(estado_usuario_1.default, { foreignKey: "estado_id" });
//Persona
nacionalidad_1.default.hasMany(persona_1.default, { foreignKey: "nacionalidad_id" }); //FK nacionalidad_id
persona_1.default.belongsTo(nacionalidad_1.default, { foreignKey: "nacionalidad_id" }); //FK nacionalidad_id
usuario_1.default.hasMany(persona_1.default, { foreignKey: "usuario_id" }); //FK usuario_id
persona_1.default.belongsTo(usuario_1.default, { foreignKey: "usuario_id" }); //FK usuario_id
//has manny = va a buscar a la otra tabla la "id"
//BELONG TO = buscar en la misma tabla el atributo fk
//targetkey
profesional_1.default.belongsTo(persona_1.default, { foreignKey: "persona_id" }); //FK especialista_id
persona_1.default.hasMany(profesional_1.default, { foreignKey: "persona_id" });
//bd_paciente========================================
//Archivo ===========================================
//Archivo - cita_id FK
cita_1.default.hasMany(archivo_1.default, { foreignKey: "cita_id" }); //FK cita_id
archivo_1.default.belongsTo(cita_1.default, { foreignKey: "cita_id" }); //FK cita_id
//Archivo
//Especialidad
especialidad_1.default.belongsTo(especialista_1.default, { foreignKey: "especialista_id" }); //FK especialista_id
especialista_1.default.hasMany(especialidad_1.default, { foreignKey: "especialista_id" });
// //especialista x -> especialidades
// Especialista.belongsTo(Especialidad, {foreignKey: "id_especialidad"})
const syncModels = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //bd_agendafree
        yield estado_usuario_1.default.sync({ alter: false });
        yield usuario_1.default.sync({ alter: false });
        yield nacionalidad_1.default.sync({ alter: false });
        yield profesional_1.default.sync({ alter: false });
        yield persona_1.default.sync({ alter: false });
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
    }
    catch (error) {
        console.error("Error al sincronizar los modelos:", error);
    }
});
exports.syncModels = syncModels;
//# sourceMappingURL=index.js.map