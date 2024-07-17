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
const connection_1 = __importDefault(require("../BD/connection"));
const connection_agenda_especialista_1 = __importDefault(require("../BD/connection_agenda_especialista"));
const usuario_1 = __importDefault(require("../rutas/usuario"));
const auth_1 = __importDefault(require("../rutas/auth"));
const persona_1 = __importDefault(require("../rutas/persona"));
const nacionalidades_1 = __importDefault(require("../rutas/nacionalidades"));
const estado_usuario_1 = __importDefault(require("../rutas/estado_usuario"));
const paciente_1 = __importDefault(require("../rutas/paciente"));
const cita_1 = __importDefault(require("../rutas/cita"));
const estado_cita_1 = __importDefault(require("../rutas/estado_cita"));
const especialista_1 = __importDefault(require("../rutas/especialista"));
const prevision_1 = __importDefault(require("../rutas/prevision"));
const hora_disponible_1 = __importDefault(require("../rutas/hora_disponible"));
const index_1 = require("./index");
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPath = {
            users: "/api/users",
            login: "/api/auth",
            persona: "/api/persona",
            nacionalidad: "/api/nacionalidad",
            estado_usuario: "/api/estado_usuario",
            paciente: "/api/paciente",
            cita: "/api/cita",
            estado_cita: "/api/estado_cita",
            especialista: "/api/especialista",
            prevision: "/api/prevision",
            hora_disponible: "/api/hora_disponible",
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
    routes() {
        this.app.use(this.apiPath.login, auth_1.default);
        this.app.use(this.apiPath.users, usuario_1.default);
        this.app.use(this.apiPath.persona, persona_1.default);
        this.app.use(this.apiPath.nacionalidad, nacionalidades_1.default);
        this.app.use(this.apiPath.estado_usuario, estado_usuario_1.default);
    }
    routes_bd_especialista() {
        this.app.use(this.apiPath.paciente, paciente_1.default);
        this.app.use(this.apiPath.cita, cita_1.default);
        this.app.use(this.apiPath.estado_cita, estado_cita_1.default);
        this.app.use(this.apiPath.especialista, especialista_1.default);
        this.app.use(this.apiPath.prevision, prevision_1.default);
        this.app.use(this.apiPath.hora_disponible, hora_disponible_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor Conectado al puerto = " + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map