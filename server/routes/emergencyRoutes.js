const express = require('express');
const router = express.Router();
const { createEmergency, getEmergencies, updateStatus } = require('../controllers/emergencyController');

router.post('/create', createEmergency);
router.get('/active', getEmergencies);
router.put('/update-status/:id', updateStatus);

module.exports = router;
