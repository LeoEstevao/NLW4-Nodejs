import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe('Users', () => {
    beforeAll( async () => {
        const connection = await createConnection();
        
        await connection.query('DROP TABLE IF EXISTS users');
        await connection.query('DROP TABLE IF EXISTS surveys');
        await connection.query('DROP TABLE IF EXISTS migrations');

        await connection.runMigrations();
    })

    it('Should be able to create a new user', async () => {
        const response = await request(app).post('/users').send({
            email: 'user@example.com',
            name: 'User Example'
        });        
        expect(response.status).toBe(201)
    })

    it('Should not be able to create a new user if its email already exists', async () => {
        const response = await request(app).post('/users').send({
            email: 'user@example.com',
            name: 'User Example'
        });        
        expect(response.status).toBe(400)
    })
})