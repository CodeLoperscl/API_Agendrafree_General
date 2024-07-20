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
const estados_1 = __importDefault(require("../models/estados"));
const getEstados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const estado = yield estados_1.default.findAll();
    res.json({ estado });
});
exports.getEstados = getEstados;
const getEstado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const estado = yield estados_1.default.findByPk(id);
    if (estado) {
        res.json(estado);
    }
    else {
        res.status(404).json({
            msg: `No existe una Estado con la id ${id}`,
        });
    }
});
exports.getEstado = getEstado;
const postEstado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { estado } = body;
    try {
        const existeEstado = yield estados_1.default.findOne({
            where: {
                estado,
            },
        });
        if (existeEstado) {
            return res.status(400).json({
                msg: "Ya existe un estado cita con el id " + estado,
            });
        }
        const Estadito = yield estados_1.default.create({ estado });
        // res.json(psswd);
        res.json(Estadito);
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
        const estado = yield estados_1.default.findByPk(id);
        if (!estado) {
            return res.status(404).json({
                msg: "No existe un estado con el id " + id,
            });
        }
        yield estado.update(body);
        res.json(estado);
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
    const estado = yield estados_1.default.findByPk(id);
    if (!estado) {
        return res.status(404).json({
            msg: "No existe una estado con el id " + id,
        });
    }
    yield estado.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(estado);
});
exports.deleteEstado = deleteEstado;
//# sourceMappingURL=estados.js.map