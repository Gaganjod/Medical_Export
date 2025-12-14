const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const User = require('../models/User');
const Emergency = require('../models/Emergency');

let token;
let patientId;

beforeAll(async () => {
    const url = process.env.MONGO_URI || 'mongodb://localhost:27017/medicare_test';
    await mongoose.connect(url);

    // Register a user to get a token
    const user = {
        name: 'Emergency User',
        email: 'emergency@example.com',
        password: 'password123',
        phone: '9876543210',
        role: 'patient'
    };

    await request(app).post('/api/auth/register').send(user);
    const loginRes = await request(app).post('/api/auth/login').send({ email: user.email, password: user.password });
    token = loginRes.body.token;
    patientId = loginRes.body.user.id;
});

afterAll(async () => {
    await User.deleteMany();
    await Emergency.deleteMany();
    await mongoose.connection.close();
});

describe('Emergency API', () => {
    it('should create a new emergency request', async () => {
        const res = await request(app)
            .post('/api/emergency/create')
            .send({
                patientId: patientId,
                location: { lat: 10.0, lng: 20.0 },
                type: 'Medical'
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('status', 'pending');
        expect(res.body).toHaveProperty('type', 'Medical');
    });

    it('should fetch active emergencies', async () => {
        const res = await request(app).get('/api/emergency/active');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBeGreaterThan(0);
    });
});
