import request from 'supertest';
import app from '../../server/src/index'; // Asegúrate de que la ruta sea correcta

describe('Contact Routes', () => {
    it('should send a contact message', async () => {
        const response = await request(app)
            .post('/api/contact') // Asegúrate de que esta ruta coincida con la definida en tu servidor
            .send({
                name: 'John Doe',
                email: 'john@example.com',
                message: 'Hello, this is a test message.'
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('success', true);
    });

    it('should return validation error for missing fields', async () => {
        const response = await request(app)
            .post('/api/contact')
            .send({
                name: '',
                email: 'john@example.com',
                message: ''
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('success', false);
        expect(response.body).toHaveProperty('error');
    });
});