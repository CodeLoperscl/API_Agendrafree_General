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
exports.deletePaciente = exports.putPaciente = exports.postPaciente = exports.getPaciente = exports.getPacientes = void 0;
const paciente_1 = __importDefault(require("../models/paciente"));
const prevision_1 = __importDefault(require("../models/prevision"));
const getPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pacientes = yield paciente_1.default.findAll({
        include: prevision_1.default,
    });
    res.json({ pacientes });
});
exports.getPacientes = getPacientes;
const getPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const paciente = yield paciente_1.default.findByPk(id, {
        include: prevision_1.default,
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
exports.getPaciente = getPaciente;
// export const getPaciente_rut = async (req: Request, res: Response) => {
//   const { rut }: any = req.params;
//   const paciente = await Paciente.findOne({
//     where: {rut},
//     include: Nacionalidades
//     });
//   if (paciente) {
//     res.json(paciente);
//   } else {
//   res.status(404).json({
//       msg: `No existe una paciente con el rut: ${rut}`,
//   });
//   }
// };
const postPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { persona_id, prevision_id, estado_id } = body;
    try {
        const existePaciente = yield paciente_1.default.findOne({
            where: {
                persona_id
            },
        });
        if (existePaciente) {
            return res.status(400).json({
                msg: "Ya existe una paciente con este usuario " + persona_id,
            });
        }
        const paciente = yield paciente_1.default.create({ persona_id, prevision_id, estado_id });
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
exports.postPaciente = postPaciente;
const putPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const paciente = yield paciente_1.default.findByPk(id);
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
exports.putPaciente = putPaciente;
const deletePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const paciente = yield paciente_1.default.findByPk(id);
    if (!paciente) {
        return res.status(404).json({
            msg: "No existe una paciente con el id " + id,
        });
    }
    yield paciente.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(paciente);
});
exports.deletePaciente = deletePaciente;
//# sourceMappingURL=paciente.js.map