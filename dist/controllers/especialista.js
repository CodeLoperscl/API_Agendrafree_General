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
exports.deleteEspecialista = exports.putEspecialista = exports.postEspecialista = exports.getEspecialista = exports.getEspecialistas = void 0;
const especialista_1 = __importDefault(require("../models/especialista"));
const especialidad_1 = __importDefault(require("../models/especialidad"));
const getEspecialistas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const especialistas = yield especialista_1.default.findAll({
        include: especialidad_1.default,
    });
    res.json({ especialistas });
});
exports.getEspecialistas = getEspecialistas;
const getEspecialista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const maqueta = yield especialista_1.default.findByPk(id, {
        include: especialidad_1.default,
    });
    if (maqueta) {
        res.json(maqueta);
    }
    else {
        res.status(404).json({
            msg: `No existe una maqueta con la id ${id}`,
        });
    }
});
exports.getEspecialista = getEspecialista;
// export const getEspecialista_rut = async (req: Request, res: Response) => {
//   const { rut }: any = req.params;
//   const maqueta = await Especialista.findOne({
//     where: {rut},
//     include: Nacionalidades
//     });
//   if (maqueta) {
//     res.json(maqueta);
//   } else {
//   res.status(404).json({
//       msg: `No existe una maqueta con el rut: ${rut}`,
//   });
//   }
// };
const postEspecialista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { usuario, contraseña } = body;
    try {
        const existeEspecialista = yield especialista_1.default.findOne({
            where: {
                usuario,
            },
        });
        if (existeEspecialista) {
            return res.status(400).json({
                msg: "Ya existe una maqueta con este usuario " + usuario,
            });
        }
        const maqueta = yield especialista_1.default.create({ usuario, contraseña });
        // res.json(psswd);
        res.json(maqueta);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postEspecialista = postEspecialista;
const putEspecialista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const maqueta = yield especialista_1.default.findByPk(id);
        if (!maqueta) {
            return res.status(404).json({
                msg: "No existe una maqueta con el id " + id,
            });
        }
        yield maqueta.update(body);
        res.json(maqueta);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putEspecialista = putEspecialista;
const deleteEspecialista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const maqueta = yield especialista_1.default.findByPk(id);
    if (!maqueta) {
        return res.status(404).json({
            msg: "No existe una maqueta con el id " + id,
        });
    }
    yield maqueta.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(maqueta);
});
exports.deleteEspecialista = deleteEspecialista;
//# sourceMappingURL=especialista.js.map