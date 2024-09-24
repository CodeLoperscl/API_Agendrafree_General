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
exports.postPersona = exports.getPersona_rut = exports.getPersona = exports.getPersonas = void 0;
const persona_1 = __importDefault(require("../models/persona"));
const axios_1 = __importDefault(require("axios"));
const nacionalidad_1 = __importDefault(require("../models/nacionalidad"));
const usuario_1 = __importDefault(require("../models/usuario"));
const email_1 = require("../config/email");
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
const getPersonas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener todos los pacientes de la base de datos
        const persona = yield persona_1.default.findAll({
            include: [nacionalidad_1.default, usuario_1.default],
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
        const persona = yield persona_1.default.findByPk(id, {
            include: [nacionalidad_1.default, usuario_1.default],
        });
        if (!persona) {
            return res.status(404).json({
                msg: `No existe un Persona con la id ${id}`,
            });
        }
        return res.json({ persona });
    }
    catch (error) {
        console.error("Error fetching Persona:", error);
        return res.status(500).json({
            msg: "Error al obtener la Persona",
            error: error.message,
        });
    }
});
exports.getPersona = getPersona;
const getPersona_rut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rut } = req.params;
        const persona = yield persona_1.default.findOne({
            where: { rut },
            include: [nacionalidad_1.default, usuario_1.default]
        });
        if (!persona) {
            return res.status(404).json({
                msg: `No existe una persona con la rut ${rut}`,
            });
        }
        const paciente = yield data_paciente(`${process.env.API_URL}paciente/persona/${persona.id}` // AGREGAR RUTA Y METODO
        );
        return res.json({ persona, paciente });
    }
    catch (error) {
        console.error("Error fetching Persona:", error);
        return res.status(500).json({
            msg: "Error al obtener la Persona",
            error: error.message,
        });
    }
});
exports.getPersona_rut = getPersona_rut;
const postPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { nombre, apellido, rut, email, fono, nacionalidad_id, usuario_id } = body;
    try {
        const existePersona = yield persona_1.default.findOne({
            where: { rut },
        });
        if (existePersona) {
            return res.status(400).json({
                msg: "Ya existe un paciente con este rut " + rut,
            });
        }
        // Crear paciente en la base de datos
        const paciente = yield persona_1.default.create({ nombre, apellido, rut, email, fono, nacionalidad_id, usuario_id });
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
        // Enviar el correo electrónico
        yield email_1.transporter.sendMail((0, email_1.mailOptions)(email, 'Bienvenido a nuestra clínica', emailContent));
        // Responder con los datos del paciente creado
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
// export const postPersona = async (req: Request, res: Response) => {
//   const { body } = req;
//   const { nombre, apellido, rut, email, fono, nacionalidad_id, usuario_id } = body;
//   try {
//     const existePersona = await Persona.findOne({
//       where: {
//         rut,
//       },
//     });
//     if (existePersona) {
//       return res.status(400).json({
//         msg: "Ya existe una paciente con este rut " + rut,
//       });
//     }
//     const paciente = await Persona.create({ nombre, apellido, rut, email, fono, nacionalidad_id, usuario_id });
//     // res.json(psswd);
//     res.json(paciente);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       msg: "Hable con el administrador",
//     });
//   }
// };
// export const putPersona = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { body } = req;
//   try {
//     const paciente = await Persona.findByPk(id);
//     if (!paciente) {
//       return res.status(404).json({
//         msg: "No existe una paciente con el id " + id,
//       });
//     }
//     await paciente.update(body);
//     res.json(paciente);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       msg: "Hable con el administrador",
//     });
//   }
// };
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