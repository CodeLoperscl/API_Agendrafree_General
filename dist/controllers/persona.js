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
exports.deletePersona = exports.putPersona = exports.postPersona = exports.getPersona_rut = exports.getPersona = exports.getPersonas = void 0;
const persona_1 = __importDefault(require("../models/persona"));
const nacionalidad_1 = __importDefault(require("../models/nacionalidad"));
const usuario_1 = __importDefault(require("../models/usuario"));
const generarCorreo_1 = require("../helpers/generarCorreo"); //importamos la funcion de helper
const usuarios_1 = require("./usuarios");
const personaHelpers_1 = require("../helpers/personaHelpers"); // Importar las funciones de helpers
// Controlador para obtener todos los especialistas
const getPersonas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener todos los pacientes de la base de datos, excluyendo 'password' de Users
        const persona = yield persona_1.default.findAll({
            include: [
                nacionalidad_1.default,
                {
                    model: usuario_1.default,
                    attributes: { exclude: ['password'] }, // Excluir el campo 'password'
                }
            ],
        });
        res.json({ persona });
    }
    catch (error) {
        console.error("Error buscando especialistas:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getPersonas = getPersonas;
const getPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // Obtener una persona por su ID, excluyendo 'password' de Users
        const persona = yield persona_1.default.findByPk(id, {
            include: [
                nacionalidad_1.default,
                {
                    model: usuario_1.default,
                    attributes: { exclude: ['password'] }, // Excluir el campo 'password'
                }
            ],
        });
        if (!persona) {
            return res.status(404).json({
                msg: `No existe una Persona con la id ${id}`,
            });
        }
        return res.json({ persona });
    }
    catch (error) {
        console.error("Error buscando la Persona:", error);
        return res.status(500).json({
            msg: "Error al obtener la Persona",
            error: error.message,
        });
    }
});
exports.getPersona = getPersona;
const getPersona_rut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sendToken = (0, personaHelpers_1.getToken)(req); // Obtener el token del request
        const { rut } = req.params;
        // Obtener los datos de la persona en la base de datos general
        const persona = yield persona_1.default.findOne({
            where: { rut },
            include: [nacionalidad_1.default, usuario_1.default],
        });
        if (!persona) {
            return res.status(404).json({
                msg: `No existe una persona con la rut ${rut}`,
            });
        }
        // Obtener los datos del paciente asociado a la persona
        const pacienteData = yield (0, personaHelpers_1.obtenerPacientePorPersonaId)(persona.id, sendToken || '');
        return res.json({ persona, paciente: pacienteData });
    }
    catch (error) {
        console.error("Error fetching Persona:", error);
        return res.status(500).json({
            msg: "Error al obtener el paciente",
            error: error.message,
        });
    }
});
exports.getPersona_rut = getPersona_rut;
const postPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, rut, email, fono, nacionalidad_id, prevision_id, estado_id } = req.body;
    try {
        // Verificar si ya existe una persona con el mismo RUT o correo
        const existePersona = yield persona_1.default.findOne({ where: { rut } });
        if (existePersona) {
            return res.status(400).json({ msg: "Ya existe una persona con este rut " + rut });
        }
        const existePersona2 = yield persona_1.default.findOne({ where: { email } });
        if (existePersona2) {
            return res.status(400).json({ msg: "Ya existe una persona con este email " + email });
        }
        // Crear un usuario asociado a la persona
        const { id: usuario_id } = yield (0, usuarios_1.crearUsuario)(rut);
        if (!usuario_id) {
            return res.status(400).json({ msg: "Error al crear el usuario con este rut " + rut });
        }
        // Crear persona en la base de datos "general"
        const persona = yield persona_1.default.create({ nombre, apellido, rut, email, fono, nacionalidad_id, usuario_id });
        // Obtener el token del header
        const token = (0, personaHelpers_1.getToken)(req);
        // Crear el paciente en la base de datos del especialista
        try {
            const url = `${process.env.API_URL}paciente`; // Asegurarse de que la URL esté bien formada
            const paciente = yield (0, personaHelpers_1.crearPaciente)(persona.id, prevision_id, estado_id, token || '', url);
            console.log("Paciente creado en la base de datos especialista:", paciente);
            // Configurar el mensaje de bienvenida
            const emailContent = `
      <h1>Bienvenido a nuestra clínica, ${nombre} ${apellido}!</h1>
      <p>Gracias por registrarte. Aquí tienes un resumen de tus datos:</p>
      <ul>
        <li><strong>Nombre:</strong> ${nombre}</li>
        <li><strong>Apellido:</strong> ${apellido}</li>
        <li><strong>RUT:</strong> ${rut}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Teléfono:</strong> ${fono}</li>
      </ul>
      `;
            if (email) { //Verifica si el email enviado por body es distinto a null
                // Usar la función generarCorreo para enviar el email
                yield (0, generarCorreo_1.generarCorreo)(email, 'Bienvenido a nuestra clínica', emailContent);
                console.log(paciente);
            }
            // Responder con los datos del persona creada y el paciente asociado
            res.json({ persona, paciente });
        }
        catch (error) {
            console.error("Error creando paciente en el proyecto especialista:", error);
            return res.status(500).json({
                msg: "Error al crear el paciente en la base de datos especialista",
                error: error.message, // Proporcionar más detalles del error
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Hable con el administrador" });
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
const deletePersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const paciente = yield persona_1.default.findByPk(id);
    if (!paciente) {
        return res.status(404).json({
            msg: "No existe una paciente con el id " + id,
        });
    }
    yield paciente.update({ estado_id: 2 });
    // await estado_usuario.destroy();
    res.json(paciente);
});
exports.deletePersona = deletePersona;
//# sourceMappingURL=persona.js.map