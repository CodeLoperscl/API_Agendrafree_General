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
exports.deleteEstado_cita = exports.putEstado_cita = exports.postEstado_cita = exports.getEstado_cita = exports.getEstados_citas = void 0;
const estado_cita_1 = __importDefault(require("../models/estado_cita"));
const getEstados_citas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const estados_citas = yield estado_cita_1.default.findAll();
    res.json({ estados_citas });
});
exports.getEstados_citas = getEstados_citas;
const getEstado_cita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const estado_cita = yield estado_cita_1.default.findByPk(id);
    if (estado_cita) {
        res.json(estado_cita);
    }
    else {
        res.status(404).json({
            msg: `No existe una estado_cita con la id ${id}`,
        });
    }
});
exports.getEstado_cita = getEstado_cita;
const postEstado_cita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { estado } = body;
    try {
        const existeCita = yield estado_cita_1.default.findOne({
            where: {
                estado,
            },
        });
        if (existeCita) {
            return res.status(400).json({
                msg: "Ya existe un estado cita con el id " + estado,
            });
        }
        const estado_cita = yield estado_cita_1.default.create({ estado });
        // res.json(psswd);
        res.json(estado_cita);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postEstado_cita = postEstado_cita;
const putEstado_cita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const estado_cita = yield estado_cita_1.default.findByPk(id);
        if (!estado_cita) {
            return res.status(404).json({
                msg: "No existe un estado_cita con el id " + id,
            });
        }
        yield estado_cita.update(body);
        res.json(estado_cita);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putEstado_cita = putEstado_cita;
const deleteEstado_cita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const estado_cita = yield estado_cita_1.default.findByPk(id);
    if (!estado_cita) {
        return res.status(404).json({
            msg: "No existe una estado_cita con el id " + id,
        });
    }
    yield estado_cita.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(estado_cita);
});
exports.deleteEstado_cita = deleteEstado_cita;
//# sourceMappingURL=estado_cita.js.map