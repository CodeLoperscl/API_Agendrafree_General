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
exports.deleteCita = exports.putCita = exports.postCita = exports.getCita = exports.getCitas = void 0;
const cita_1 = __importDefault(require("../models/cita"));
const estados_1 = __importDefault(require("../models/estados"));
const paciente_1 = __importDefault(require("../models/paciente"));
const especialista_1 = __importDefault(require("../models/especialista"));
const prevision_1 = __importDefault(require("../models/prevision"));
const hora_disponible_1 = __importDefault(require("../models/hora_disponible"));
const getCitas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const citas = yield cita_1.default.findAll({
        include: [estados_1.default, paciente_1.default, especialista_1.default, prevision_1.default, hora_disponible_1.default]
    });
    res.json({ citas });
});
exports.getCitas = getCitas;
const getCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cita = yield cita_1.default.findByPk(id, {
        include: [estados_1.default, paciente_1.default, especialista_1.default, prevision_1.default, hora_disponible_1.default]
    });
    if (cita) {
        res.json(cita);
    }
    else {
        res.status(404).json({
            msg: `No existe una citas con la id ${id}`,
        });
    }
});
exports.getCita = getCita;
const postCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { fecha, id_estado, id_paciente, id_especialista, id_prevision, id_hora } = body;
    try {
        const existeCita = yield cita_1.default.findOne({
            where: {
                fecha,
            },
        });
        if (existeCita) {
            return res.status(400).json({
                msg: "Ya existe una cita con este rut " + fecha,
            });
        }
        const cita = yield cita_1.default.create({ fecha, id_estado, id_paciente, id_especialista, id_prevision, id_hora });
        // res.json(psswd);
        res.json(cita);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postCita = postCita;
const putCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const cita = yield cita_1.default.findByPk(id);
        if (!cita) {
            return res.status(404).json({
                msg: "No existe una cita con el id " + id,
            });
        }
        yield cita.update(body);
        res.json(cita);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putCita = putCita;
const deleteCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cita = yield cita_1.default.findByPk(id);
    if (!cita) {
        return res.status(404).json({
            msg: "No existe una cita con el id " + id,
        });
    }
    yield cita.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(cita);
});
exports.deleteCita = deleteCita;
//# sourceMappingURL=cita.js.map