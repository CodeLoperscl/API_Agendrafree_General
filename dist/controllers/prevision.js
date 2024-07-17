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
exports.deletePrevision = exports.putPrevision = exports.postPrevision = exports.getPrevision = exports.getPrevisiones = void 0;
const prevision_1 = __importDefault(require("../models/prevision"));
const getPrevisiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const previsiones = yield prevision_1.default.findAll();
    res.json({ previsiones });
});
exports.getPrevisiones = getPrevisiones;
const getPrevision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const prevision = yield prevision_1.default.findByPk(id);
    if (prevision) {
        res.json(prevision);
    }
    else {
        res.status(404).json({
            msg: `No existe una prevision con la id ${id}`,
        });
    }
});
exports.getPrevision = getPrevision;
const postPrevision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { nombre } = body;
    try {
        const existePrevision = yield prevision_1.default.findOne({
            where: {
                nombre,
            },
        });
        if (existePrevision) {
            return res.status(400).json({
                msg: "Ya existe una prevision con este nombre " + nombre,
            });
        }
        const prevision = yield prevision_1.default.create({ nombre });
        // res.json(psswd);
        res.json(prevision);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postPrevision = postPrevision;
const putPrevision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const prevision = yield prevision_1.default.findByPk(id);
        if (!prevision) {
            return res.status(404).json({
                msg: "No existe una prevision con el id " + id,
            });
        }
        yield prevision.update(body);
        res.json(prevision);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putPrevision = putPrevision;
const deletePrevision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const prevision = yield prevision_1.default.findByPk(id);
    if (!prevision) {
        return res.status(404).json({
            msg: "No existe una prevision con el id " + id,
        });
    }
    yield prevision.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(prevision);
});
exports.deletePrevision = deletePrevision;
//# sourceMappingURL=prevision.js.map