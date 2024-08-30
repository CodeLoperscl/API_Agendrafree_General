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
exports.deletePersona = exports.putPersona = exports.postPersona = exports.getPersona_rut = exports.getPersona = exports.getPersonas = void 0;
const persona_1 = __importDefault(require("../models/persona"));
const nacionalidad_1 = __importDefault(require("../models/nacionalidad"));
const getPersonas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const personas = yield persona_1.default.findAll({
        include: nacionalidad_1.default,
    });
    res.json({ personas });
});
exports.getPersonas = getPersonas;
const getPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const persona = yield persona_1.default.findByPk(id, {
        include: nacionalidad_1.default
    });
    if (persona) {
        res.json(persona);
    }
    else {
        res.status(404).json({
            msg: `No existe una persona con la id ${id}`,
        });
    }
});
exports.getPersona = getPersona;
const getPersona_rut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rut } = req.params;
    const persona = yield persona_1.default.findOne({
        where: { rut },
        include: nacionalidad_1.default
    });
    if (persona) {
        res.json(persona);
    }
    else {
        res.status(404).json({
            msg: `No existe una persona con el rut: ${rut}`,
        });
    }
});
exports.getPersona_rut = getPersona_rut;
const postPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { nombre, apellido, rut, id_nacionalidad, email, fono, } = body;
    try {
        const existePersona = yield persona_1.default.findOne({
            where: {
                rut,
            },
        });
        if (existePersona) {
            return res.status(400).json({
                msg: "Ya existe una persona con este rut " + rut,
            });
        }
        const persona = yield persona_1.default.create({ nombre, apellido, rut, id_nacionalidad, email, fono });
        // res.json(psswd);
        res.json(persona);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postPersona = postPersona;
const putPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const persona = yield persona_1.default.findByPk(id);
        if (!persona) {
            return res.status(404).json({
                msg: "No existe una persona con el id " + id,
            });
        }
        yield persona.update(body);
        res.json(persona);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putPersona = putPersona;
const deletePersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const persona = yield persona_1.default.findByPk(id);
    if (!persona) {
        return res.status(404).json({
            msg: "No existe una persona con el id " + id,
        });
    }
    yield persona.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(persona);
});
exports.deletePersona = deletePersona;
//# sourceMappingURL=persona%20copy.js.map