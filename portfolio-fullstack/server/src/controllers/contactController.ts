import { Request, Response } from 'express';
import emailService from '../services/emailService';
import MessageModel from '../models/Message';

export const contactFormHandler = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  try {
    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Todos los campos son requeridos.',
      });
    }

    // Guardar mensaje en la base de datos
    const newMessage = await MessageModel.create({ name, email, message });

    // Enviar email de notificación
    await emailService.sendEmail({
      to: process.env.CONTACT_EMAIL || 'your-email@example.com',
      subject: 'Nuevo mensaje desde el formulario de contacto',
      text: `Tienes un nuevo mensaje de ${name} (${email}): ${message}`,
      html: `
                <h2>Nuevo mensaje de contacto</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
                <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
            `,
    });

    res.status(200).json({
      success: true,
      message: 'Mensaje enviado exitosamente!',
      data: newMessage,
    });
  } catch (error) {
    console.error('Error procesando el formulario de contacto:', error);
    res.status(500).json({
      success: false,
      message:
        'Hubo un error enviando tu mensaje. Por favor intenta nuevamente.',
    });
  }
};
