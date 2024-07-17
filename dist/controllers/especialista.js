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
exports.deleteEspecialista = exports.putEspecialista = exports.postEspecialista = exports.getEspecialista = exports.getEspecialistas = void 0;
const especialista_1 = __importDefault(require("../models/especialista"));
const getEspecialistas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const especialistas = yield especialista_1.default.findAll();
    res.json({ especialistas });
});
exports.getEspecialistas = getEspecialistas;
const getEspecialista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const especialista = yield especialista_1.default.findByPk(id);
    if (especialista) {
        res.json(especialista);
    }
    else {
        res.status(404).json({
            msg: `No existe una especialista con la id ${id}`,
        });
    }
});
exports.getEspecialista = getEspecialista;
const postEspecialista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { uid, hora_minima_bono, id_persona, bd_name, bd_user, bd_pass, bd_url } = body;
    try {
        const existeEspecialista = yield especialista_1.default.findOne({
            where: {
                uid,
            },
        });
        if (existeEspecialista) {
            return res.status(400).json({
                msg: "Ya existe una especialista con el uid " + uid,
            });
        }
        const especialista = yield especialista_1.default.create({ uid, hora_minima_bono, id_persona, bd_name, bd_user, bd_pass, bd_url });
        // res.json(psswd);
        res.json(especialista);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postEspecialista = postEspecialista;
const putEspecialista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const especialista = yield especialista_1.default.findByPk(id);
        if (!especialista) {
            return res.status(404).json({
                msg: "No existe una especialista con el id " + id,
            });
        }
        yield especialista.update(body);
        res.json(especialista);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putEspecialista = putEspecialista;
const deleteEspecialista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const especialista = yield especialista_1.default.findByPk(id);
    if (!especialista) {
        return res.status(404).json({
            msg: "No existe una especialista con el id " + id,
        });
    }
    yield especialista.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(especialista);
});
exports.deleteEspecialista = deleteEspecialista;
//# sourceMappingURL=especialista.js.map