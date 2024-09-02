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
exports.deleteEstado = exports.putEstado = exports.postEstado = exports.getEstado = exports.getEstados = void 0;
const estado_1 = __importDefault(require("../models/estado"));
const getEstados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const estados = yield estado_1.default.findAll({});
    res.json({ estados });
});
exports.getEstados = getEstados;
const getEstado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const estado = yield estado_1.default.findByPk(id, {});
    if (estado) {
        res.json(estado);
    }
    else {
        res.status(404).json({
            msg: `No existe un estado usuario con la id ${id}`,
        });
    }
});
exports.getEstado = getEstado;
const postEstado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { estado } = body;
    try {
        const existeEstado = yield estado_1.default.findOne({
            where: {
                estado,
            },
        });
        if (existeEstado) {
            return res.status(400).json({
                msg: "Ya existe una maqueta con este usuario " + estado,
            });
        }
        const Estado = yield estado_1.default.create({ estado });
        res.json(Estado);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postEstado = postEstado;
const putEstado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const Estado = yield estado_1.default.findByPk(id);
        if (!Estado) {
            return res.status(404).json({
                msg: "No existe un estado con el " + id,
            });
        }
        yield Estado.update(body);
        res.json(Estado);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putEstado = putEstado;
const deleteEstado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Estado = yield estado_1.default.findByPk(id);
    if (!Estado) {
        return res.status(404).json({
            msg: "No existe un estado usuario con el id " + id,
        });
    }
    yield Estado.update({ estado: false });
    // await Estado.destroy();
    res.json(Estado);
});
exports.deleteEstado = deleteEstado;
//# sourceMappingURL=estado.js.map