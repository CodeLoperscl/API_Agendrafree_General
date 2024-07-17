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
exports.deleteHora_disponible = exports.putHora_disponible = exports.postHora_disponible = exports.getHora_disponible = exports.getHoras_disponibles = void 0;
const hora_disponible_1 = __importDefault(require("../models/hora_disponible"));
const getHoras_disponibles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const horas_disponibles = yield hora_disponible_1.default.findAll();
    res.json({ horas_disponibles });
});
exports.getHoras_disponibles = getHoras_disponibles;
const getHora_disponible = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const hora_disponible = yield hora_disponible_1.default.findByPk(id);
    if (hora_disponible) {
        res.json(hora_disponible);
    }
    else {
        res.status(404).json({
            msg: `No existe una hora_disponible con la id ${id}`,
        });
    }
});
exports.getHora_disponible = getHora_disponible;
const postHora_disponible = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id_especialista, hora } = body;
    try {
        const existeHora_disponible = yield hora_disponible_1.default.findOne({
            where: {
                hora,
            },
        });
        if (existeHora_disponible) {
            return res.status(400).json({
                msg: "Ya esta ocupada esta hora " + hora,
            });
        }
        const hora_disponible = yield hora_disponible_1.default.create({ id_especialista, hora });
        // res.json(psswd);
        res.json(hora_disponible);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postHora_disponible = postHora_disponible;
const putHora_disponible = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const hora_disponible = yield hora_disponible_1.default.findByPk(id);
        if (!hora_disponible) {
            return res.status(404).json({
                msg: "No existe una hora disponible con el id " + id,
            });
        }
        yield hora_disponible.update(body);
        res.json(hora_disponible);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putHora_disponible = putHora_disponible;
const deleteHora_disponible = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const hora_disponible = yield hora_disponible_1.default.findByPk(id);
    if (!hora_disponible) {
        return res.status(404).json({
            msg: "No existe una hora disponible con el id " + id,
        });
    }
    yield hora_disponible.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(hora_disponible);
});
exports.deleteHora_disponible = deleteHora_disponible;
//# sourceMappingURL=hora_disponible.js.map