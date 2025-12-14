const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const User = require('../models/User');

beforeAll(async () => {
    // Connect to a test database
    const url = process.env.MONGO_URI || 'mongodb://localhost:27017/medicare_test';
    await mongoose.connect(url);
});

afterAll(async () => {
    // Clean up and close connection
    await User.deleteMany();
    await mongoose.connection.close();
});

describe('Authentication API', () => {
    let user = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        phone: '1234567890',
        role: 'patient'
    };

    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send(user);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'User registered successfully');
    });

    it('should login the user', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: user.email,
                password: user.password
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
        expect(res.body.user).toHaveProperty('email', user.email);
    });

    it('should fail login with wrong password', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: user.email,
                password: 'wrongpassword'
            });
        expect(res.statusCode).toEqual(400);
    });
});
