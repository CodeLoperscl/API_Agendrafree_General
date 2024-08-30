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
exports.putJuego = exports.getJuego = exports.getJuegos = void 0;
const juego_1 = __importDefault(require("../models/juego"));
const getJuegos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const juegos = yield juego_1.default.findAll();
    res.json({ juegos });
});
exports.getJuegos = getJuegos;
const getJuego = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const juego = yield juego_1.default.findByPk(id);
    if (juego) {
        res.json(juego);
    }
    else {
        res.status(404).json({
            msg: `No existe una juego con la id ${id}`,
        });
    }
});
exports.getJuego = getJuego;
// export const postJuego = async (req: Request, res: Response) => {
//   const { body } = req;
//   const {nombre } = body;
//   try {
//     const existeJuego = await Juego.findOne({
//       where: {
//         nombre,
//       },
//     });
//     if (existeJuego) {
//       return res.status(400).json({
//         msg: "Ya existe una Juego con este nombre " + existeJuego,
//       });
//     }
// //cambie el nombre de la columna juego a nombre en la tabla juegos
//     const juego = await Juego.create({nombre});
//     // res.json(psswd);
//     res.json(juego);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       msg: "Hable con el administrador",
//     });
//   }
// };
const putJuego = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const juego = yield juego_1.default.findByPk(id);
        if (!juego) {
            return res.status(404).json({
                msg: "No existe un juego con el id " + id,
            });
        }
        yield juego.update(body);
        res.json(juego);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putJuego = putJuego;
// export const deleteJuego = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const juego = await Juego.findByPk(id);
//   if (!juego) {
//   return res.status(404).json({
//       msg: "No existe un juego con el id " + id,
//   });
//   }
//   await juego.update({ estado: false });
// // await estado_usuario.destroy();
//   res.json(juego);
// };
//# sourceMappingURL=juego.js.map