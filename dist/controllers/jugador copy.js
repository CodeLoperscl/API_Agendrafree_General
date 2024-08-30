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
exports.deleteEspecialidad = exports.putEspecialidad = exports.postEspecialidad = exports.getEspecialidad = exports.getEspecialidades = void 0;
const jugador_1 = __importDefault(require("../models/jugador"));
const getEspecialidades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jugadores = yield jugador_1.default.findAll();
    res.json({ jugadores });
});
exports.getEspecialidades = getEspecialidades;
const getEspecialidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const jugador = yield jugador_1.default.findByPk(id);
    if (jugador) {
        res.json(jugador);
    }
    else {
        res.status(404).json({
            msg: `No existe una jugador con la id ${id}`,
        });
    }
});
exports.getEspecialidad = getEspecialidad;
const postEspecialidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { username, id_juego } = body;
    try {
        const existeJugador = yield jugador_1.default.findOne({
            where: {
                username,
            },
        });
        if (existeJugador) {
            return res.status(400).json({
                msg: "Ya existe una Jugador con este nombre " + existeJugador,
            });
        }
        //cambie el nombre de la columna jugador a nombre en la tabla jugadores
        const jugador = yield jugador_1.default.create({ username, id_juego });
        // res.json(psswd);
        res.json(jugador);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postEspecialidad = postEspecialidad;
const putEspecialidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const jugador = yield jugador_1.default.findByPk(id);
        if (!jugador) {
            return res.status(404).json({
                msg: "No existe un jugador con el id " + id,
            });
        }
        yield jugador.update(body);
        res.json(jugador);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putEspecialidad = putEspecialidad;
const deleteEspecialidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const jugador = yield jugador_1.default.findByPk(id);
    if (!jugador) {
        return res.status(404).json({
            msg: "No existe un jugador con el id " + id,
        });
    }
    yield jugador.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(jugador);
});
exports.deleteEspecialidad = deleteEspecialidad;
//# sourceMappingURL=jugador%20copy.js.map