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
const estado_1 = __importDefault(require("./estado"));
const persona_1 = __importDefault(require("./persona"));
const nacionalidad_1 = __importDefault(require("./nacionalidad"));
const profesional_1 = __importDefault(require("./profesional"));
// Establecer las asociaciones
//belongsto = 1 a 1 // buscar en la misma tabla el atributo fk
//hasmany = 1 a N // va a buscar a la otra tabla la "id"
//bd_paciente========================================
//===================================================================
//usuario - estado
usuario_1.default.belongsTo(estado_1.default, { foreignKey: "estado_id" });
estado_1.default.hasMany(usuario_1.default, { foreignKey: "estado_id" });
//===================================================================
//Persona - nacionalidad
persona_1.default.belongsTo(nacionalidad_1.default, { foreignKey: "nacionalidad_id" });
nacionalidad_1.default.hasMany(persona_1.default, { foreignKey: "nacionalidad_id" });
//Persona - Usuario
persona_1.default.belongsTo(usuario_1.default, { foreignKey: "usuario_id" });
usuario_1.default.hasMany(persona_1.default, { foreignKey: "usuario_id" });
//===================================================================
//Profesional - Persona
profesional_1.default.belongsTo(persona_1.default, { foreignKey: "persona_id" });
persona_1.default.hasMany(profesional_1.default, { foreignKey: "persona_id" });
//Profesional - estado
// Estado.hasMany(Profesional, {foreignKey: "estado_id"});
// Profesional.belongsTo(Estado, {foreignKey: "estado_id"});
//===================================================================
//nacionalidad - estado
nacionalidad_1.default.belongsTo(estado_1.default, { foreignKey: "estado_id" });
estado_1.default.hasMany(nacionalidad_1.default, { foreignKey: "estado_id" });
const syncModels = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //bd_agendafree
        yield estado_1.default.sync({ alter: false });
        yield usuario_1.default.sync({ alter: false });
        yield nacionalidad_1.default.sync({ alter: false });
        yield profesional_1.default.sync({ alter: false });
        yield persona_1.default.sync({ alter: false });
        console.log("Modelos sincronizados correctamente");
    }
    catch (error) {
        console.error("Error al sincronizar los modelos:", error);
    }
});
exports.syncModels = syncModels;
//# sourceMappingURL=index.js.map