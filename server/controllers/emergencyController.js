const Emergency = require('../models/Emergency');

const createEmergency = async (req, res) => {
    try {
        const { patientId, location, type } = req.body;

        // Create new emergency
        const newEmergency = new Emergency({
            patientId,
            location,
            type: type || 'Medical',
            status: 'pending'
        });

        const savedEmergency = await newEmergency.save();

        // In a real app, we would emit a socket event here too, 
        // but we can also do it from the client side for simplicity in this demo.
        // Ideally: req.io.emit('new_emergency', savedEmergency); if we passed io instance.

        res.status(201).json(savedEmergency);
    } catch (error) {
        res.status(500).json({ message: "Error creating emergency", error: error.message });
    }
};

const getEmergencies = async (req, res) => {
    try {
        // For drivers/admin: get all pending or active emergencies
        const emergencies = await Emergency.find({ status: { $ne: 'resolved' } })
            .populate('patientId', 'name phone')
            .sort({ createdAt: -1 });
        res.json(emergencies);
    } catch (error) {
        res.status(500).json({ message: "Error fetching emergencies" });
    }
};

const updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, driverId } = req.body;

        const updatedEmergency = await Emergency.findByIdAndUpdate(
            id,
            { status, driverId },
            { new: true }
        ).populate('patientId', 'name phone');

        res.json(updatedEmergency);
    } catch (error) {
        res.status(500).json({ message: "Error updating status" });
    }
};

module.exports = { createEmergency, getEmergencies, updateStatus };
