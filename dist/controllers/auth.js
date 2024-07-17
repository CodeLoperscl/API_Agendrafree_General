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
exports.login = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const usuario_1 = __importDefault(require("../models/usuario"));
const generarJWT_1 = require("../helpers/generarJWT");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_name, password } = req.body;
    try {
        const user = yield usuario_1.default.findOne({
            where: {
                user_name,
            },
        });
        if (!user) {
            return res.status(400).json({
                msg: `El usuario con el user_name ${user_name} no existe`,
            });
        }
        if (!user.estado) {
            return res.status(400).json({
                msg: `El usuario se encuentra desabilitado`,
            });
        }
        const validPassword = bcryptjs_1.default.compareSync(password, user.password);
        console.log(password, "Contraseña ingresada");
        console.log(user.password, "Contraseña BD");
        console.log("HOLAAAAAA", validPassword);
        if (!validPassword) {
            return res.status(400).json({
                msg: `La contraseña no es valida para este usuario`,
            });
        }
        const { id } = user;
        const name = user.user_name;
        const payload = { name, id };
        const token = yield (0, generarJWT_1.generarjwt)(payload);
        res.json({
            msg: "login Ok",
            user,
            token,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Algo salio mal, Hable con el Administrador",
        });
    }
});
exports.login = login;
//# sourceMappingURL=auth.js.map