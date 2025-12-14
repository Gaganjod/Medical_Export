const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
        address: String
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'assigned', 'on_the_way', 'resolved', 'cancelled'],
        default: 'pending'
    },
    type: { type: String, default: 'Medical' } // Medical, Fire, Police
}, { timestamps: true });

module.exports = mongoose.model('Emergency', emergencySchema);
