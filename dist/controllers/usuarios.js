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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUser_uid = exports.getUser = exports.getUsers = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const estado_usuario_1 = __importDefault(require("../models/estado_usuario"));
const persona_1 = __importDefault(require("../models/persona"));
const profesional_1 = __importDefault(require("../models/profesional"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield usuario_1.default.findAll({
        include: estado_usuario_1.default
    });
    res.json({ users });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield usuario_1.default.findByPk(id, {
        include: estado_usuario_1.default
    });
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({
            msg: `No existe el usuario con la id ${id}`,
        });
    }
});
exports.getUser = getUser;
const getUser_uid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const user = yield usuario_1.default.findOne({
        where: { uid },
        include: [{
                model: persona_1.default,
                include: [profesional_1.default]
            }]
    });
    if (user) {
        // if(user.personas.profesionales.habilitado){
        // res.json(user);
        res.json(user);
        // }else{
        //   res.status(404).json({
        //     msg: `El profesional ${user.personas.nombre} se encuentra deshabilitado`,
        //   });
        // }
    }
    else {
        res.status(404).json({
            msg: `No existe el usuario con la id ${uid}`,
        });
    }
});
exports.getUser_uid = getUser_uid;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { user_name, password } = body;
    try {
        const existeUsuario = yield usuario_1.default.findOne({
            where: {
                user_name,
            },
        });
        if (existeUsuario) {
            return res.status(400).json({
                msg: "Ya existe un usuario con este nombre " + user_name,
            });
        }
        const salto = bcryptjs_1.default.genSaltSync();
        const psswd = bcryptjs_1.default.hashSync(password, salto);
        const usuario = yield usuario_1.default.create({ user_name, password: psswd });
        // res.json(psswd);
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: "No existe un usuario con el id " + id,
            });
        }
        yield usuario.update(body);
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: "No existe un usuario con el id " + id,
        });
    }
    yield usuario.update({ estado: false });
    // await usuario.destroy();
    res.json(usuario);
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map