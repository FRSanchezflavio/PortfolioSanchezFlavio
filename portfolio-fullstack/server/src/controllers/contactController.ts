import { Request, Response } from 'express';
import { sendEmail } from '../services/emailService';
import { Message } from '../models/Message';

export const contactFormHandler = async (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    try {
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        await sendEmail({
            to: 'your-email@example.com',
            subject: 'New Contact Form Submission',
            text: `You have a new message from ${name} (${email}): ${message}`,
        });

        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({ success: false, message: 'There was an error sending your message.' });
    }
};