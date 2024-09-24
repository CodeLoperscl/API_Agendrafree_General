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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const emailService_1 = require("../helpers/emailService");
// Controlador para registrar al usuario
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, correo } = req.body;
    if (!nombre || !correo) {
        return res.status(400).json({ message: 'Nombre y correo son requeridos.' });
    }
    try {
        // Crear un nuevo usuario en la base de datos o lo que decidas hacer aquí
        const newUser = { nombre, correo };
        // Llamamos al servicio de correo para enviar el mensaje
        yield (0, emailService_1.sendEmail)(newUser.correo, newUser.nombre);
        return res.status(200).json({ message: 'Usuario registrado y correo enviado.' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Error al enviar el correo.' });
    }
});
exports.registerUser = registerUser;
//# sourceMappingURL=userController.js.map