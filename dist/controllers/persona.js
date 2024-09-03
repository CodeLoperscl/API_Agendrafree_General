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
exports.putPersona = exports.postPersona = exports.getPersona_rut = exports.getPersona = exports.getPersonas = exports.getPersona_rut_paciente = void 0;
const persona_1 = __importDefault(require("../models/persona"));
const axios_1 = __importDefault(require("axios"));
const nacionalidad_1 = __importDefault(require("../models/nacionalidad"));
const usuario_1 = __importDefault(require("../models/usuario"));
// Función para obtener los datos de una paciente
function data_paciente(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data: paciente } = yield axios_1.default.get(url);
            return paciente;
        }
        catch (error) {
            console.error(`Error fetching data from ${url}:`, error);
            throw error;
        }
    });
}
// Controlador para obtener todos los especialistas
const getPersona_rut_paciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener todos los especialistas de la base de datos
        const paciente = yield persona_1.default.findAll({
            include: [nacionalidad_1.default, usuario_1.default],
        });
        // Crear un array de promesas para resolver todas las llamadas asíncronas
        const allPersonas = yield Promise.all(paciente.map((pac) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                // Obtener los datos de la paciente para cada persona
                const pacienteData = yield data_paciente(`${process.env.API_URL}paciente/${pac.paciente_id}`);
                // Crear un nuevo objeto combinando los datos de persona y paciente
                return Object.assign(Object.assign({}, pac.toJSON()), { paciente: pacienteData });
            }
            catch (error) {
                console.error(`Error fetching paciente for persona ${pac.id}:`, error);
                // Retornar el persona con null para paciente en caso de error
                return Object.assign(Object.assign({}, pac.toJSON()), { paciente: null });
            }
        })));
        res.json({ allPersonas });
    }
    catch (error) {
        console.error("Error buscando especialistas:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getPersona_rut_paciente = getPersona_rut_paciente;
const getPersonas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const personas = yield persona_1.default.findAll({
        include: [nacionalidad_1.default, usuario_1.default]
    });
    res.json({ personas });
});
exports.getPersonas = getPersonas;
const getPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const paciente = yield persona_1.default.findByPk(id, {
        include: [usuario_1.default, nacionalidad_1.default]
    });
    if (paciente) {
        res.json(paciente);
    }
    else {
        res.status(404).json({
            msg: `No existe una paciente con la id ${id}`,
        });
    }
});
exports.getPersona = getPersona;
const getPersona_rut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rut } = req.params;
    const paciente = yield persona_1.default.findOne({
        where: { rut },
        include: [nacionalidad_1.default, usuario_1.default]
    });
    if (paciente) {
        res.json(paciente);
    }
    else {
        res.status(404).json({
            msg: `No existe una paciente con el rut: ${rut}`,
        });
    }
});
exports.getPersona_rut = getPersona_rut;
const postPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { nombre, apellido, rut, email, fono, nacionalidad_id, usuario_id } = body;
    try {
        const existePersona = yield persona_1.default.findOne({
            where: {
                rut,
            },
        });
        if (existePersona) {
            return res.status(400).json({
                msg: "Ya existe una paciente con este rut " + rut,
            });
        }
        const paciente = yield persona_1.default.create({ nombre, apellido, rut, email, fono, nacionalidad_id, usuario_id });
        // res.json(psswd);
        res.json(paciente);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postPersona = postPersona;
const putPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const paciente = yield persona_1.default.findByPk(id);
        if (!paciente) {
            return res.status(404).json({
                msg: "No existe una paciente con el id " + id,
            });
        }
        yield paciente.update(body);
        res.json(paciente);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putPersona = putPersona;
// export const deletePersona = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const paciente = await Persona.findByPk(id);
//   if (!paciente) {
//   return res.status(404).json({
//       msg: "No existe una paciente con el id " + id,
//   });
//   }
//   await paciente.update({ estado_id: 2 });
// // await estado_usuario.destroy();
//   res.json(paciente);
// };
//# sourceMappingURL=persona.js.map