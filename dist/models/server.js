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
const express_1 = __importDefault(require("express"));
// Conexiones BD
const connection_1 = __importDefault(require("../BD/connection"));
const connection_agenda_especialista_1 = __importDefault(require("../BD/connection_agenda_especialista"));
const auth_1 = __importDefault(require("../rutas/auth"));
// Routes BD paciente
const usuario_1 = __importDefault(require("../rutas/usuario"));
const persona_1 = __importDefault(require("../rutas/persona"));
const nacionalidades_1 = __importDefault(require("../rutas/nacionalidades"));
const estado_usuario_1 = __importDefault(require("../rutas/estado_usuario"));
const profesional_1 = __importDefault(require("../rutas/profesional"));
// Routes BD especialista
// import pacienteRoutes from "../rutas/paciente";
// import citaRoutes from "../rutas/cita";
// import estado_citaRoutes from "../rutas/estado_cita";
// import estadosRoutes from "../rutas/estados";
const profesional_2 = __importDefault(require("../rutas/profesional"));
const prevision_1 = __importDefault(require("../rutas/prevision"));
const especialidad_1 = __importDefault(require("../rutas/especialidad"));
// import hora_disponibleRoutes from "../rutas/hora_disponible";
const archivo_1 = __importDefault(require("../rutas/archivo"));
// import tipo_archivoRoutes from "../rutas/tipo_archivo";
// import servicioRoutes from "../rutas/servicios";
const index_1 = require("./index");
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPath = {
            login: "/api/auth",
            //BD paciente
            users: "/api/users",
            persona: "/api/persona",
            nacionalidad: "/api/nacionalidad",
            estado_usuario: "/api/estado_usuario",
            profesional: "/api/profesional",
            // BD especialista 
            paciente: "/api/paciente",
            cita: "/api/cita",
            estado_cita: "/api/estado_cita",
            estado: "/api/estados",
            especialista: "/api/especialista",
            prevision: "/api/prevision",
            hora_disponible: "/api/hora_disponible",
            archivo: "/api/archivo",
            tipo_archivo: "/api/tipo_archivo",
            servicio: "/api/servicio",
            especialidad: "/api/especialidad",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        this.bdConnection();
        this.bdConnection_especialista();
        this.middlewares();
        this.routes();
        this.routes_bd_especialista();
    }
    bdConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("Database Online");
                yield (0, index_1.syncModels)();
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    bdConnection_especialista() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_agenda_especialista_1.default.authenticate();
                console.log("Base de dato especialista online");
                yield (0, index_1.syncModels)();
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); // Lectura y parceo del body
        this.app.use(express_1.default.static("public")); //Directorio Publico
    }
    // BD paciente
    routes() {
        this.app.use(this.apiPath.login, auth_1.default);
        this.app.use(this.apiPath.users, usuario_1.default);
        this.app.use(this.apiPath.persona, persona_1.default);
        this.app.use(this.apiPath.nacionalidad, nacionalidades_1.default);
        this.app.use(this.apiPath.estado_usuario, estado_usuario_1.default);
        this.app.use(this.apiPath.profesional, profesional_1.default);
    }
    // BD especialista
    routes_bd_especialista() {
        // this.app.use(this.apiPath.paciente, pacienteRoutes);
        // this.app.use(this.apiPath.cita, citaRoutes);
        // this.app.use(this.apiPath.estado_cita, estado_citaRoutes);
        this.app.use(this.apiPath.especialista, profesional_2.default);
        this.app.use(this.apiPath.especialidad, especialidad_1.default);
        this.app.use(this.apiPath.prevision, prevision_1.default);
        // this.app.use(this.apiPath.hora_disponible, hora_disponibleRoutes);
        // this.app.use(this.apiPath.estado, estadosRoutes);
        this.app.use(this.apiPath.archivo, archivo_1.default);
        // this.app.use(this.apiPath.tipo_archivo, tipo_archivoRoutes);
        // this.app.use(this.apiPath.servicio, servicioRoutes);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor Conectado al puerto = " + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map