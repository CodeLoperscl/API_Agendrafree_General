import nodemailer from 'nodemailer';

// Configurar el servicio de correo (por ejemplo, usando Gmail)
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Tu email
    pass: process.env.EMAIL_PASS, // Tu contraseña
  },
});

// Opciones predeterminadas para el correo electrónico
export const mailOptions = (to: string, subject: string, html: string) => ({
  from: process.env.EMAIL_USER,
  to,
  subject,
  html,
});
