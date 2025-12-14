const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { Server } = require("socket.io");
const http = require('http');

dotenv.config();

const app = express();
// Allow app to be exported for testing without starting the server
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
const emergencyRoutes = require('./routes/emergencyRoutes');
app.use('/api/emergency', emergencyRoutes);

app.get('/', (req, res) => {
    res.send('MediCare API is running');
});

module.exports = app;
