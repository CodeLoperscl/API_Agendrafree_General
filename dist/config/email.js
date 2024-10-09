"use strict";
// import nodemailer from 'nodemailer';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailOptions = exports.transporter = void 0;
// // Configurar el servicio de correo (por ejemplo, usando Gmail)
// export const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER, // Tu email
//     pass: process.env.EMAIL_PASS, // Tu contraseña
//   },
// });
// // Opciones predeterminadas para el correo electrónico
// export const mailOptions = (to: string, subject: string, html: string) => ({
//   from: process.env.EMAIL_USER,
//   to,
//   subject,
//   html,
// });
const nodemailer_1 = __importDefault(require("nodemailer"));
// Configurar el servicio de correo usando los datos de NinjaHosting
exports.transporter = nodemailer_1.default.createTransport({
    host: 'mail.agendafree.cl',
    port: 587,
    secure: false,
    auth: {
        user: 'info@agendafree.cl',
        pass: process.env.EMAIL_PASS, // La contraseña
    },
    tls: {
        rejectUnauthorized: false, // Permitir certificados no verificados
    },
});
// Opciones predeterminadas para el correo electrónico
const mailOptions = (to, subject, html) => ({
    from: 'info@agendafree.cl',
    to,
    subject,
    html,
});
exports.mailOptions = mailOptions;
//# sourceMappingURL=email.js.map