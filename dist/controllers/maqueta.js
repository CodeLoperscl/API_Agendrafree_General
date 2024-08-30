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
exports.deleteMaqueta = exports.putMaqueta = exports.postMaqueta = exports.getMaqueta = exports.getMaquetas = void 0;
const maqueta_1 = __importDefault(require("../models/maqueta"));
const nacionalidad_1 = __importDefault(require("../models/nacionalidad"));
const getMaquetas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const maquetas = yield maqueta_1.default.findAll({
        include: nacionalidad_1.default,
    });
    res.json({ maquetas });
});
exports.getMaquetas = getMaquetas;
const getMaqueta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const maqueta = yield maqueta_1.default.findByPk(id, {
        include: nacionalidad_1.default
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
exports.getMaqueta = getMaqueta;
// export const getMaqueta_rut = async (req: Request, res: Response) => {
//   const { rut }: any = req.params;
//   const maqueta = await Maqueta.findOne({ 
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
const postMaqueta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { usuario, contraseña } = body;
    try {
        const existeMaqueta = yield maqueta_1.default.findOne({
            where: {
                usuario,
            },
        });
        if (existeMaqueta) {
            return res.status(400).json({
                msg: "Ya existe una maqueta con este usuario " + usuario,
            });
        }
        const maqueta = yield maqueta_1.default.create({ usuario, contraseña });
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
exports.postMaqueta = postMaqueta;
const putMaqueta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const maqueta = yield maqueta_1.default.findByPk(id);
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
exports.putMaqueta = putMaqueta;
const deleteMaqueta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const maqueta = yield maqueta_1.default.findByPk(id);
    if (!maqueta) {
        return res.status(404).json({
            msg: "No existe una maqueta con el id " + id,
        });
    }
    yield maqueta.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(maqueta);
});
exports.deleteMaqueta = deleteMaqueta;
//# sourceMappingURL=maqueta.js.map