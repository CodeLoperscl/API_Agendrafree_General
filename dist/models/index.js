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
const cita_1 = __importDefault(require("./cita"));
const estados_1 = __importDefault(require("./estados"));
const estado_usuario_1 = __importDefault(require("./estado_usuario"));
const usuario_1 = __importDefault(require("./usuario"));
const paciente_1 = __importDefault(require("./paciente"));
const hora_disponible_1 = __importDefault(require("./hora_disponible"));
const especialista_1 = __importDefault(require("./especialista"));
const prevision_1 = __importDefault(require("./prevision"));
const persona_1 = __importDefault(require("./persona"));
const nacionalidad_1 = __importDefault(require("./nacionalidad"));
const estados_2 = __importDefault(require("./estados"));
const archivo_1 = __importDefault(require("./archivo"));
const especialidad_1 = __importDefault(require("./especialidad"));
const tipo_archivo_1 = __importDefault(require("./tipo_archivo"));
const servicios_1 = __importDefault(require("./servicios"));
// Establecer las asociaciones
//belongsto = 1 a 1
//hasmany = 1 a N
//bd_agendafree
estado_usuario_1.default.hasMany(usuario_1.default, { foreignKey: "estado" });
usuario_1.default.belongsTo(estado_usuario_1.default, { foreignKey: "estado" });
nacionalidad_1.default.hasMany(persona_1.default, { foreignKey: "id_nacionalidad" });
persona_1.default.belongsTo(nacionalidad_1.default, { foreignKey: "id_nacionalidad" });
//bd_agendafree_especialista   CITA -> X
cita_1.default.belongsTo(estados_1.default, { foreignKey: "id_estado" });
cita_1.default.belongsTo(paciente_1.default, { foreignKey: "id_paciente" });
cita_1.default.belongsTo(especialista_1.default, { foreignKey: "id_especialista" });
cita_1.default.belongsTo(prevision_1.default, { foreignKey: "id_prevision" });
cita_1.default.belongsTo(hora_disponible_1.default, { foreignKey: "id_hora" });
//bd_agendafree_especialista X - >Cita
estados_1.default.hasMany(cita_1.default, { foreignKey: "id_estado" });
paciente_1.default.hasMany(cita_1.default, { foreignKey: "id_paciente" });
especialista_1.default.hasMany(cita_1.default, { foreignKey: "id_especialista" });
prevision_1.default.hasMany(cita_1.default, { foreignKey: "id_prevision" });
hora_disponible_1.default.hasMany(cita_1.default, { foreignKey: "id_hora" });
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
const syncModels = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //bd_agendafree
        yield estado_usuario_1.default.sync({ alter: false });
        yield usuario_1.default.sync({ alter: false });
        yield nacionalidad_1.default.sync({ alter: false });
        yield persona_1.default.sync({ alter: false });
        //bd agendafree_especialista
        yield cita_1.default.sync({ alter: false });
        yield estados_1.default.sync({ alter: false });
        yield paciente_1.default.sync({ alter: false });
        yield prevision_1.default.sync({ alter: false });
        yield estados_2.default.sync({ alter: false });
        yield archivo_1.default.sync({ alter: false });
        yield tipo_archivo_1.default.sync({ alter: false });
        yield especialista_1.default.sync({ alter: false });
        yield especialidad_1.default.sync({ alter: false });
        yield servicios_1.default.sync({ alter: false });
        yield hora_disponible_1.default.sync({ alter: false });
        console.log("Modelos sincronizados correctamente");
    }
    catch (error) {
        console.error("Error al sincronizar los modelos:", error);
    }
});
exports.syncModels = syncModels;
//# sourceMappingURL=index.js.map