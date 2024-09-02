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
const auth_1 = __importDefault(require("../rutas/auth"));
// Routes BD paciente
const usuario_1 = __importDefault(require("../rutas/usuario"));
const persona_1 = __importDefault(require("../rutas/persona"));
const nacionalidades_1 = __importDefault(require("../rutas/nacionalidades"));
const estado_1 = __importDefault(require("../rutas/estado"));
const profesional_1 = __importDefault(require("../rutas/profesional"));
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
            estado: "/api/estado",
            profesional: "/api/profesional",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        this.bdConnection();
        this.middlewares();
        this.routes();
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
        this.app.use(this.apiPath.estado, estado_1.default);
        this.app.use(this.apiPath.profesional, profesional_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor Conectado al puerto = " + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map