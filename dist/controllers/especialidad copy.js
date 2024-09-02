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
exports.deleteEspecialidad = exports.putEspecialidad = exports.postEspecialidad = exports.getEspecialidad = exports.getEspecialidades = void 0;
const especialidad_1 = __importDefault(require("../models/especialidad"));
const getEspecialidades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const especialidades = yield especialidad_1.default.findAll();
    res.json({ especialidades });
});
exports.getEspecialidades = getEspecialidades;
const getEspecialidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const especialidad = yield especialidad_1.default.findByPk(id);
    if (especialidad) {
        res.json(especialidad);
    }
    else {
        res.status(404).json({
            msg: `No existe una especialidad con la id ${id}`,
        });
    }
});
exports.getEspecialidad = getEspecialidad;
const postEspecialidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { nombre, id_especialista, abreviatura } = body;
    try {
        const existeEspecialidad = yield especialidad_1.default.findOne({
            where: {
                nombre,
            },
        });
        if (existeEspecialidad) {
            return res.status(400).json({
                msg: "Ya existe una Especialidad con este nombre " + existeEspecialidad,
            });
        }
        //cambie el nombre de la columna especialidad a nombre en la tabla especialidades
        const especialidad = yield especialidad_1.default.create({ nombre, id_especialista, abreviatura });
        // res.json(psswd);
        res.json(especialidad);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postEspecialidad = postEspecialidad;
const putEspecialidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const especialidad = yield especialidad_1.default.findByPk(id);
        if (!especialidad) {
            return res.status(404).json({
                msg: "No existe una archivo con el id " + id,
            });
        }
        yield especialidad.update(body);
        res.json(especialidad);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putEspecialidad = putEspecialidad;
const deleteEspecialidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const especialidad = yield especialidad_1.default.findByPk(id);
    if (!especialidad) {
        return res.status(404).json({
            msg: "No existe una archivo con el id " + id,
        });
    }
    yield especialidad.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(especialidad);
});
exports.deleteEspecialidad = deleteEspecialidad;
//# sourceMappingURL=especialidad%20copy.js.map