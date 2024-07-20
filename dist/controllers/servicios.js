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
exports.deleteServicio = exports.putServicio = exports.postServicio = exports.getServicio = exports.getServicios = void 0;
const servicios_1 = __importDefault(require("../models/servicios"));
const getServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const servicios = yield servicios_1.default.findAll();
    res.json({ servicios });
});
exports.getServicios = getServicios;
const getServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const servicio = yield servicios_1.default.findByPk(id);
    if (servicio) {
        res.json(servicio);
    }
    else {
        res.status(404).json({
            msg: `No existe una servicio con la id ${id}`,
        });
    }
});
exports.getServicio = getServicio;
const postServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { nombre, id_especialista, estado } = body;
    try {
        const existeServicio = yield servicios_1.default.findOne({
            where: {
                nombre,
            },
        });
        if (existeServicio) {
            return res.status(400).json({
                msg: "Ya existe una servicio con este rut " + nombre,
            });
        }
        const servicio = yield servicios_1.default.create({ nombre, id_especialista, estado });
        // res.json(psswd);
        res.json(servicio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postServicio = postServicio;
const putServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const servicio = yield servicios_1.default.findByPk(id);
        if (!servicio) {
            return res.status(404).json({
                msg: "No existe una servicio con el id " + id,
            });
        }
        yield servicio.update(body);
        res.json(servicio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putServicio = putServicio;
const deleteServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const servicio = yield servicios_1.default.findByPk(id);
    if (!servicio) {
        return res.status(404).json({
            msg: "No existe una servicio con el id " + id,
        });
    }
    yield servicio.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(servicio);
});
exports.deleteServicio = deleteServicio;
//# sourceMappingURL=servicios.js.map