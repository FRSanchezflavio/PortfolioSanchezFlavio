import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contact';
import { errorHandler } from './middleware/errorHandler';
import { requestLogger } from './middleware/requestLogger';

const app = express();
const PORT = process.env.PORT || 5000;

// Validar variables de entorno críticas
const requiredEnvVars = ['EMAIL_HOST', 'EMAIL_USER', 'EMAIL_PASS'];
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.warn(`⚠️  Variable de entorno faltante: ${envVar}`);
  }
});

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// Routes
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Error handling middleware
app.use(errorHandler);

// Start the server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📧 Email service configured: ${process.env.EMAIL_HOST}`);
  console.log(`🔗 CORS origin: ${process.env.CORS_ORIGIN}`);
});

// Manejo de errores no capturados
process.on('uncaughtException', error => {
  console.error('❌ Excepción no capturada:', error);
  process.exit(1);
});

process.on('unhandledRejection', reason => {
  console.error('❌ Promesa rechazada no manejada:', reason);
  process.exit(1);
});

// Cierre graceful
process.on('SIGTERM', () => {
  console.log('📛 SIGTERM recibido, cerrando servidor...');
  server.close(() => {
    console.log('✅ Servidor cerrado');
    process.exit(0);
  });
});
