import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Phone, Navigation, AlertTriangle } from 'lucide-react';
import axios from 'axios';
import MapComponent from './MapComponent';

// Initialize socket outside component to avoid multiple connections
const socket = io('http://localhost:5000');

const Emergency = () => {
    const [status, setStatus] = useState('idle'); // idle, locating, sent, on_the_way
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [emergencyId, setEmergencyId] = useState(null);

    // Initial location fetch
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (err) => {
                    setError("Location access denied. Please enable GPS.");
                    console.error(err);
                }
            );
        } else {
            setError("Geolocation not supported by your browser.");
        }

        // Listen for updates from driver
        socket.on('status_update', (data) => {
            console.log('Status Update:', data);
            // Handle updates logic here
        });

        return () => {
            socket.off('status_update');
        };
    }, []);

    const handleSOS = async () => {
        if (!location) {
            alert("Please wait for location to be detected.");
            return;
        }

        setStatus('locating');

        try {
            // Get user from local storage (or context)
            const userStr = localStorage.getItem('user');
            const user = userStr ? JSON.parse(userStr) : null;

            if (!user) {
                alert("Please login to send an emergency alert.");
                // Redirect to login logic could go here
                return;
            }

            const payload = {
                patientId: user.id || "guest", // Handle guest logic if needed
                location: location,
                type: 'Medical'
            };

            // 1. Create Emergency in Backend
            const res = await axios.post('http://localhost:5000/api/emergency/create', payload);
            setEmergencyId(res.data._id);

            // 2. Emit Socket Event
            socket.emit('emergency_alert', {
                ...payload,
                _id: res.data._id,
                user: user
            });

            setStatus('sent');
        } catch (err) {
            console.error(err);
            setStatus('error');
            const msg = err.response?.data?.message || err.message || "Failed to send alert";
            setError(msg + " - Call 108 immediately.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Emergency Assistance</h1>

            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
                {status === 'idle' && (
                    <>
                        <div className="mb-6 relative">
                            <div className="absolute inset-0 bg-red-200 rounded-full animate-ping opacity-75"></div>
                            <button
                                onClick={handleSOS}
                                className="relative z-10 w-48 h-48 bg-red-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg hover:bg-red-700 transition transform hover:scale-105"
                            >
                                <Phone className="w-16 h-16 mb-2" />
                                <span className="text-2xl font-bold">SOS</span>
                                <span className="text-sm">Click for Help</span>
                            </button>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Pressing this button will alert nearby ambulances and send your current location.
                        </p>
                    </>
                )}

                {status === 'locating' && (
                    <div className="flex flex-col items-center py-10">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600 mb-4"></div>
                        <p className="text-xl font-semibold text-gray-700">Connecting to Responders...</p>
                    </div>
                )}

                {status === 'sent' && (
                    <div className="flex flex-col items-center">
                        <div className="bg-green-100 p-4 rounded-full mb-4">
                            <Navigation className="w-12 h-12 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-green-700 mb-2">Alert Sent!</h2>
                        <p className="text-gray-600 mb-6">
                            Nearby ambulances have been notified. Please stay calm.
                        </p>
                        <div className="w-full bg-gray-50 p-4 rounded-lg border border-gray-200 text-left">
                            <p className="text-sm text-gray-500 mb-1">Your ID: <span className="font-mono text-gray-800">{emergencyId}</span></p>
                            <p className="text-sm text-gray-500">Location: {location?.lat.toFixed(4)}, {location?.lng.toFixed(4)}</p>
                        </div>
                    </div>
                )}

                {status === 'error' && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
                        <div className="flex">
                            <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                            <p className="text-red-700 font-bold">{error}</p>
                        </div>
                        <p className="mt-2 text-sm text-red-600">Please dial 108 directly from your phone.</p>
                    </div>
                )}
            </div>

            {/* Map Preview */}
            <div className="w-full max-w-md mt-8 rounded-xl overflow-hidden shadow-md">
                {location && <MapComponent position={location} label="Your Location" height="300px" />}
            </div>
        </div>
    );
};

export default Emergency;
