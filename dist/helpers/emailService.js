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
exports.sendEmail = void 0;
// /src/services/emailService.ts
const nodemailer_1 = __importDefault(require("nodemailer"));
// Servicio de correo
const sendEmail = (userEmail, userName) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        service: 'Gmail', // O el servicio SMTP que estés usando
        auth: {
            user: 'TU_CORREO@gmail.com', // El correo desde el cual se enviarán los correos
            pass: 'TU_APP_PASSWORD' // Contraseña de aplicación o App Password
        }
    });
    // Opciones del correo
    const mailOptions = {
        from: '"AgendaFree" <noreply@tudominio.com>', // Correo de tu app
        to: userEmail, // Correo del usuario registrado
        subject: 'Gracias por registrarte en AgendaFree',
        text: `Hola ${userName}, muchas gracias por registrarte en AgendaFree!`,
        html: `<p>Hola <b>${userName}</b>, muchas gracias por registrarte en AgendaFree!</p>`
    };
    // Enviar el correo
    try {
        yield transporter.sendMail(mailOptions);
        console.log('Correo enviado correctamente');
    }
    catch (error) {
        console.error('Error al enviar el correo:', error);
        throw error;
    }
});
exports.sendEmail = sendEmail;
//# sourceMappingURL=emailService.js.map