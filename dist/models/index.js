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
// Establecer las asociaciones
//belongsto = 1 a 1
//hasmany = 1 a N
estado_usuario_1.default.hasMany(usuario_1.default, { foreignKey: "estado" });
usuario_1.default.belongsTo(estado_usuario_1.default, { foreignKey: "estado" });
//CITA 1 a -> x
cita_1.default.belongsTo(estados_1.default, { foreignKey: "id_estado" });
cita_1.default.belongsTo(paciente_1.default, { foreignKey: "id_paciente" });
cita_1.default.belongsTo(especialista_1.default, { foreignKey: "id_especialista" });
cita_1.default.belongsTo(hora_disponible_1.default, { foreignKey: "id_hora" });
cita_1.default.belongsTo(prevision_1.default, { foreignKey: "id_prevision" });
//Cita x -> Cita
estados_1.default.hasMany(cita_1.default, { foreignKey: "id_estado" });
paciente_1.default.hasMany(cita_1.default, { foreignKey: "id_paciente" });
especialista_1.default.hasMany(cita_1.default, { foreignKey: "id_especialista" });
hora_disponible_1.default.hasMany(cita_1.default, { foreignKey: "id_hora" });
prevision_1.default.hasMany(cita_1.default, { foreignKey: "id_prevision" });
const syncModels = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield estado_usuario_1.default.sync({ alter: false });
        yield usuario_1.default.sync({ alter: false });
        yield estados_1.default.sync({ alter: false });
        yield cita_1.default.sync({ alter: false });
        yield paciente_1.default.sync({ alter: false });
        yield especialista_1.default.sync({ alter: false });
        yield hora_disponible_1.default.sync({ alter: false });
        yield prevision_1.default.sync({ alter: false });
        console.log("Modelos sincronizados correctamente");
    }
    catch (error) {
        console.error("Error al sincronizar los modelos:", error);
    }
});
exports.syncModels = syncModels;
//# sourceMappingURL=index.js.map