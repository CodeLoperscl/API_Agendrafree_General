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
exports.deleteJugador = exports.putJugador = exports.postJugador = exports.getJugador = exports.getJugadores = void 0;
const jugador_1 = __importDefault(require("../models/jugador"));
const juego_1 = __importDefault(require("../models/juego"));
const getJugadores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jugadores = yield jugador_1.default.findAll({
        include: juego_1.default
    });
    res.json({ jugadores });
});
exports.getJugadores = getJugadores;
const getJugador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const jugador = yield jugador_1.default.findByPk(id, {
        include: juego_1.default
    });
    if (jugador) {
        res.json(jugador);
    }
    else {
        res.status(404).json({
            msg: `No existe una jugador con la id ${id}`,
        });
    }
});
exports.getJugador = getJugador;
const postJugador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.postJugador = postJugador;
const putJugador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.putJugador = putJugador;
const deleteJugador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.deleteJugador = deleteJugador;
//# sourceMappingURL=jugador.js.map