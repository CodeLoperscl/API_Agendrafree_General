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
const estado_cita_1 = __importDefault(require("./estado_cita"));
const estado_usuario_1 = __importDefault(require("./estado_usuario"));
const usuario_1 = __importDefault(require("./usuario"));
// Establecer las asociaciones
estado_usuario_1.default.hasMany(usuario_1.default, { foreignKey: "estado" });
usuario_1.default.belongsTo(estado_usuario_1.default, { foreignKey: "estado" });
estado_cita_1.default.hasMany(cita_1.default, { foreignKey: "id_estado" });
cita_1.default.belongsTo(estado_cita_1.default, { foreignKey: "id_estado" });
const syncModels = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield estado_usuario_1.default.sync({ alter: true });
        yield usuario_1.default.sync({ alter: true });
        yield estado_cita_1.default.sync({ alter: false });
        yield cita_1.default.sync({ alter: false });
        console.log("Modelos sincronizados correctamente");
    }
    catch (error) {
        console.error("Error al sincronizar los modelos:", error);
    }
});
exports.syncModels = syncModels;
//# sourceMappingURL=index.js.map