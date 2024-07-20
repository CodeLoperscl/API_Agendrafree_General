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
exports.deleteTipo_Archivo = exports.putTipo_Archivo = exports.postTipo_Archivo = exports.getTipo_Archivo = exports.getTipos_Archivos = void 0;
const tipo_archivo_1 = __importDefault(require("../models/tipo_archivo"));
const getTipos_Archivos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tipos_archivos = yield tipo_archivo_1.default.findAll();
    res.json({ tipos_archivos });
});
exports.getTipos_Archivos = getTipos_Archivos;
const getTipo_Archivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tipo_archivo = yield tipo_archivo_1.default.findByPk(id);
    if (tipo_archivo) {
        res.json(tipo_archivo);
    }
    else {
        res.status(404).json({
            msg: `No existe una archivo con la id ${id}`,
        });
    }
});
exports.getTipo_Archivo = getTipo_Archivo;
const postTipo_Archivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { nombre_tipo } = body;
    try {
        const existeTipo_Archivo = yield tipo_archivo_1.default.findOne({
            where: {
                nombre_tipo,
            },
        });
        if (existeTipo_Archivo) {
            return res.status(400).json({
                msg: "Ya existe tipo de archivo con este nombre " + nombre_tipo,
            });
        }
        const tipo_archivo = yield tipo_archivo_1.default.create({ nombre_tipo });
        // res.json(psswd);
        res.json(tipo_archivo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postTipo_Archivo = postTipo_Archivo;
const putTipo_Archivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const tipo_archivo = yield tipo_archivo_1.default.findByPk(id);
        if (!tipo_archivo) {
            return res.status(404).json({
                msg: "No existe una archivo con el id " + id,
            });
        }
        yield tipo_archivo.update(body);
        res.json(tipo_archivo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putTipo_Archivo = putTipo_Archivo;
const deleteTipo_Archivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tipo_archivo = yield tipo_archivo_1.default.findByPk(id);
    if (!tipo_archivo) {
        return res.status(404).json({
            msg: "No existe una archivo con el id " + id,
        });
    }
    yield tipo_archivo.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(tipo_archivo);
});
exports.deleteTipo_Archivo = deleteTipo_Archivo;
//# sourceMappingURL=tipo_archivo.js.map