"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailOptions = exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
// Configurar el servicio de correo (por ejemplo, usando Gmail)
exports.transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Tu email
        pass: process.env.EMAIL_PASS, // Tu contraseña
    },
});
// Opciones predeterminadas para el correo electrónico
const mailOptions = (to, subject, html) => ({
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
});
exports.mailOptions = mailOptions;
//# sourceMappingURL=email.js.map