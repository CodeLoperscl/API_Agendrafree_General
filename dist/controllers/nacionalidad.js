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
exports.deleteNacionalidad = exports.putNacionalidad = exports.postNacionalidad = exports.getNacionalidad = exports.getNacionalidades = void 0;
const estado_1 = __importDefault(require("../models/estado"));
const nacionalidad_1 = __importDefault(require("../models/nacionalidad"));
const getNacionalidades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nacionalidades = yield nacionalidad_1.default.findAll({
        include: [estado_1.default]
    });
    res.json({ nacionalidades });
});
exports.getNacionalidades = getNacionalidades;
const getNacionalidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const nacionalidad = yield nacionalidad_1.default.findByPk(id, {
        include: [estado_1.default]
    });
    if (nacionalidad) {
        res.json(nacionalidad);
    }
    else {
        res.status(404).json({
            msg: `No existe un nacionalidad con la id ${id}`,
        });
    }
});
exports.getNacionalidad = getNacionalidad;
const postNacionalidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.body;
    try {
        const existeNacionalidad = yield nacionalidad_1.default.findOne({
            where: {
                nombre,
            },
        });
        if (existeNacionalidad) {
            return res.status(400).json({
                msg: "Ya existe un nacionalidad " + nombre,
            });
        }
        const nacionalidad = yield nacionalidad_1.default.create({ nombre, estado_id: 1 });
        res.json(nacionalidad);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postNacionalidad = postNacionalidad;
const putNacionalidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const nacionalidad = yield nacionalidad_1.default.findByPk(id);
        if (!nacionalidad) {
            return res.status(404).json({
                msg: "No existe un nacionalidad con el " + id,
            });
        }
        yield nacionalidad.update(body);
        res.json(nacionalidad);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putNacionalidad = putNacionalidad;
const deleteNacionalidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const nacionalidad = yield nacionalidad_1.default.findByPk(id);
    if (!nacionalidad) {
        return res.status(404).json({
            msg: "No existe un nacionalidad con el id " + id,
        });
    }
    yield nacionalidad.update({ estado_id: 2 });
    // await nacionalidad.destroy();
    res.json(nacionalidad);
});
exports.deleteNacionalidad = deleteNacionalidad;
//# sourceMappingURL=nacionalidad.js.map