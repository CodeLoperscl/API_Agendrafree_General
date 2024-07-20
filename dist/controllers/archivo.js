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
exports.deleteArchivo = exports.putArchivo = exports.postArchivo = exports.getArchivo = exports.getArchivos = void 0;
const archivo_1 = __importDefault(require("../models/archivo"));
const getArchivos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const archivos = yield archivo_1.default.findAll();
    res.json({ archivos });
});
exports.getArchivos = getArchivos;
const getArchivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const archivo = yield archivo_1.default.findByPk(id);
    if (archivo) {
        res.json(archivo);
    }
    else {
        res.status(404).json({
            msg: `No existe una archivo con la id ${id}`,
        });
    }
});
exports.getArchivo = getArchivo;
const postArchivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id_cita, id_tipoArchivo, ruta_archivo, id_estado_abono } = body;
    try {
        const existeArchivo = yield archivo_1.default.findOne({
            where: {
                ruta_archivo,
            },
        });
        if (existeArchivo) {
            return res.status(400).json({
                msg: "Ya existe una archivo con esta ruta " + ruta_archivo,
            });
        }
        const archivo = yield archivo_1.default.create({ id_cita, id_tipoArchivo, ruta_archivo, id_estado_abono });
        // res.json(psswd);
        res.json(archivo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postArchivo = postArchivo;
const putArchivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const archivo = yield archivo_1.default.findByPk(id);
        if (!archivo) {
            return res.status(404).json({
                msg: "No existe una archivo con el id " + id,
            });
        }
        yield archivo.update(body);
        res.json(archivo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putArchivo = putArchivo;
const deleteArchivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const archivo = yield archivo_1.default.findByPk(id);
    if (!archivo) {
        return res.status(404).json({
            msg: "No existe una archivo con el id " + id,
        });
    }
    yield archivo.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(archivo);
});
exports.deleteArchivo = deleteArchivo;
//# sourceMappingURL=archivo.js.map