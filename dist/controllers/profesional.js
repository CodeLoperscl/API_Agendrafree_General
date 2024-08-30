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
exports.deleteProfesional = exports.putProfesional = exports.postProfesional = exports.getProfesional = exports.getProfesionales = void 0;
const profesional_1 = __importDefault(require("../models/profesional"));
const persona_1 = __importDefault(require("../models/persona"));
const getProfesionales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profesionales = yield profesional_1.default.findAll({
        include: [persona_1.default]
    });
    res.json({ profesionales });
});
exports.getProfesionales = getProfesionales;
const getProfesional = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const profesional = yield profesional_1.default.findByPk(id, {
        include: [persona_1.default]
    });
    if (profesional) {
        res.json(profesional);
    }
    else {
        res.status(404).json({
            msg: `No existe una profesional con la id ${id}`,
        });
    }
});
exports.getProfesional = getProfesional;
// export const getProfesional_rut = async (req: Request, res: Response) => {
//     const { rut }: any = req.params;
//     const profesional = await Profesional.findOne({
//         where: { rut },
//         include: Persona,
//     });
//     if (profesional) {
//         res.json(profesional);
//     } else {
//         res.status(404).json({
//             msg: `No existe una profesional con el rut: ${rut}`,
//         });
//     }
// };
const postProfesional = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { habilitado, bd_host, bd_name, bd_pass, bd_url, persona_id } = body;
    try {
        const existeProfesional = yield profesional_1.default.findOne({
            where: {
                bd_name,
            },
        });
        if (existeProfesional) {
            return res.status(400).json({
                msg: "Ya existe una profesional con esta bd name " + bd_name,
            });
        }
        const profesional = yield profesional_1.default.create({ habilitado, bd_host, bd_name, bd_pass, bd_url, persona_id });
        // res.json(psswd);
        res.json(profesional);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postProfesional = postProfesional;
const putProfesional = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const profesional = yield profesional_1.default.findByPk(id);
        if (!profesional) {
            return res.status(404).json({
                msg: "No existe una profesional con el id " + id,
            });
        }
        yield profesional.update(body);
        res.json(profesional);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putProfesional = putProfesional;
const deleteProfesional = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const profesional = yield profesional_1.default.findByPk(id);
    if (!profesional) {
        return res.status(404).json({
            msg: "No existe una profesional con el id " + id,
        });
    }
    yield profesional.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(profesional);
});
exports.deleteProfesional = deleteProfesional;
//# sourceMappingURL=profesional.js.map