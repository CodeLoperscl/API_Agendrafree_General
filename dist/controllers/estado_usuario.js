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
exports.deleteEstado_usuario = exports.putEstado_usuario = exports.postEstado_usuario = exports.getEstado_usuario = exports.getEstados_usuarios = void 0;
const estado_usuario_1 = __importDefault(require("../models/estado_usuario"));
const usuario_1 = __importDefault(require("../models/usuario"));
const getEstados_usuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const estados_usuarios = yield estado_usuario_1.default.findAll({
        include: [{
                model: usuario_1.default
            }]
    });
    res.json({ estados_usuarios });
});
exports.getEstados_usuarios = getEstados_usuarios;
const getEstado_usuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const estado_usuario = yield estado_usuario_1.default.findByPk(id, {
        include: [{
                model: usuario_1.default
            }]
    });
    if (estado_usuario) {
        res.json(estado_usuario);
    }
    else {
        res.status(404).json({
            msg: `No existe el estado usuario con la id ${id}`,
        });
    }
});
exports.getEstado_usuario = getEstado_usuario;
const postEstado_usuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { estado } = body;
    try {
        const existeEstado_usuario = yield estado_usuario_1.default.findOne({
            where: {
                estado,
            },
        });
        if (existeEstado_usuario) {
            return res.status(400).json({
                msg: "Ya existe un estado_usuario con este estado " + estado,
            });
        }
        const estado_usuario = yield estado_usuario_1.default.create({ estado });
        // res.json(psswd);
        res.json(estado_usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postEstado_usuario = postEstado_usuario;
const putEstado_usuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const estado_usuario = yield estado_usuario_1.default.findByPk(id);
        if (!estado_usuario) {
            return res.status(404).json({
                msg: "No existe un estado_usuario con el id " + id,
            });
        }
        yield estado_usuario.update(body);
        res.json(estado_usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putEstado_usuario = putEstado_usuario;
const deleteEstado_usuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const estado_usuario = yield estado_usuario_1.default.findByPk(id);
    if (!estado_usuario) {
        return res.status(404).json({
            msg: "No existe un estado_usuario con el id " + id,
        });
    }
    yield estado_usuario.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(estado_usuario);
});
exports.deleteEstado_usuario = deleteEstado_usuario;
//# sourceMappingURL=estado_usuario.js.map