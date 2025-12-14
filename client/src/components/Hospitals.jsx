import { MapPin, Phone, Clock, Search, Navigation, Filter } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hospitals = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All');
    const [userLocation, setUserLocation] = useState(null);
    const [sortedHospitals, setSortedHospitals] = useState([]);
    const [isLocating, setIsLocating] = useState(false);

    // Initial Data with Localized Hospitals in Punjab
    const hospitals = [
        // --- Jalandhar & Phagwara Region ---
        {
            name: "Phagwara Civil Hospital",
            type: "Government",
            address: "Chahal Nagar, Phagwara, Punjab",
            phone: "01824-260376",
            open: "24/7",
            lat: 31.2305,
            lng: 75.7628
        },
        {
            name: "Civil Hospital Jalandhar",
            type: "Government",
            address: "Jyoti Chowk, Near Police Station, Jalandhar",
            phone: "0181-2227006",
            open: "24/7",
            lat: 31.3253,
            lng: 75.5732
        },
        {
            name: "Patel Hospital",
            type: "Private",
            address: "Civil Lines, Jalandhar",
            phone: "0181-2224444",
            open: "24/7",
            lat: 31.3237,
            lng: 75.5783
        },
        {
            name: "Capitol Hospital",
            type: "Private",
            address: "Jalandhar - Pathankot Road, Near Reru Chowk",
            phone: "0181-2345678",
            open: "24/7",
            lat: 31.3650, // Approx
            lng: 75.5900
        },
        {
            name: "Sacred Heart Hospital",
            type: "Private",
            address: "GT Road, Maqsudan, Jalandhar",
            phone: "0181-2670267",
            open: "24/7",
            lat: 31.3450, // Approx
            lng: 75.5600
        },
        {
            name: "Sharma Children Hospital",
            type: "Specialist",
            address: "722, Guru Hargobind Nagar, Phagwara",
            phone: "01824-262301",
            open: "24/7",
            lat: 31.2220,
            lng: 75.7710
        },
        {
            name: "Gandhi Hospital",
            type: "Private",
            address: "77-A, Patel Nagar, Phagwara",
            phone: "01824-267214",
            open: "24/7",
            lat: 31.2150,
            lng: 75.7650
        },
        {
            name: "Mittal Hospital",
            type: "Private",
            address: "Model Town, Phagwara",
            phone: "98140-24793",
            open: "24/7",
            lat: 31.2180,
            lng: 75.7750
        },
        {
            name: "Agarwal Hospital & Heart Care",
            type: "Specialist",
            address: "Hoshiarpur Road, Phagwara",
            phone: "01824-228777",
            open: "24/7",
            lat: 31.2350,
            lng: 75.7800
        },

        // --- Major Government Hospitals in Punjab ---
        {
            name: "V.J. Hospital (Medical College)",
            type: "Government",
            address: "Majitha Road, Amritsar",
            phone: "0183-2555555",
            open: "24/7",
            lat: 31.6500,
            lng: 74.8800
        },
        {
            name: "Rajendra Hospital",
            type: "Government",
            address: "Sangrur Road, Patiala",
            phone: "0175-2222222",
            open: "24/7",
            lat: 30.3400,
            lng: 76.3800
        },
        {
            name: "Civil Hospital Ludhiana",
            type: "Government",
            address: "Civil Lines, Ludhiana",
            phone: "0161-2444444",
            open: "24/7",
            lat: 30.9010,
            lng: 75.8573
        },
        {
            name: "Civil Hospital Hoshiarpur",
            type: "Government",
            address: "Hoshiarpur, Punjab",
            phone: "01882-220000",
            open: "24/7",
            lat: 31.5273,
            lng: 75.9126
        }
    ];

    // Haversine formula to calculate distance in km
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d.toFixed(1);
    };

    const deg2rad = (deg) => {
        return deg * (Math.PI / 180);
    };

    const handleLocateMe = () => {
        setIsLocating(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    setIsLocating(false);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setIsLocating(false);
                    // Fallback for demo: Phagwara Center
                    /*
                    setUserLocation({
                        lat: 31.2240,
                        lng: 75.7708
                    });
                    */
                    alert("Unable to retrieve your location. Please check your browser settings.");
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
            setIsLocating(false);
        }
    };

    // Filter and Sort Hospitals
    useEffect(() => {
        let processed = [...hospitals];

        // 1. Calculate Distances if location available
        if (userLocation) {
            processed = processed.map(h => ({
                ...h,
                distance: calculateDistance(userLocation.lat, userLocation.lng, h.lat, h.lng)
            })).sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
        } else {
            // Default random distances if no location
            processed = processed.map(h => ({ ...h, distance: "---" }));
        }

        // 2. Search Filter
        if (searchTerm) {
            processed = processed.filter(h =>
                h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                h.address.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // 3. Type Filter
        if (filterType !== 'All') {
            processed = processed.filter(h => h.type === filterType);
        }

        setSortedHospitals(processed);
    }, [searchTerm, filterType, userLocation]);


    return (
        <section id="hospitals" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Nearby Hospitals</h2>
                    <p className="text-gray-600">Find top government and private hospitals in Punjab & Jalandhar region.</p>
                </div>

                {/* Search and Sort Controls */}
                <div className="mb-10 bg-gray-50 p-6 rounded-2xl shadow-inner border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

                        {/* Search Bar */}
                        <div className="relative w-full md:w-1/3">
                            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search hospitals (e.g. Jalandhar, Phagwara)..."
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm transition"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Filter Dropdown */}
                        <div className="relative w-full md:w-1/4">
                            <Filter className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <select
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm appearance-none"
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                            >
                                <option value="All">All Types</option>
                                <option value="Government">Government</option>
                                <option value="Private">Private</option>
                                <option value="Specialist">Specialist</option>
                            </select>
                        </div>

                        {/* Location Button */}
                        <button
                            onClick={handleLocateMe}
                            disabled={isLocating}
                            className={`w-full md:w-auto flex items-center justify-center px-6 py-3 rounded-xl font-bold transition shadow-md ${userLocation
                                    ? 'bg-green-100 text-green-700 border border-green-200 cursor-default'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                        >
                            <Navigation className={`w-5 h-5 mr-2 ${isLocating ? 'animate-spin' : ''}`} />
                            {isLocating ? 'Locating...' : userLocation ? 'Sort by Distance' : 'Sort by Nearby'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedHospitals.length > 0 ? sortedHospitals.map((hospital, index) => (
                        <div key={index} className="bg-white border boundary-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group">
                            <div className="bg-blue-600 h-2 w-full group-hover:bg-red-500 transition-colors"></div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{hospital.name}</h3>
                                    <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2 ${hospital.type === 'Private' ? 'bg-purple-100 text-purple-700' :
                                            hospital.type === 'Government' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                        }`}>
                                        {hospital.type}
                                    </span>
                                </div>

                                <div className="mt-4 space-y-3">
                                    <div className="flex items-start text-gray-600">
                                        <MapPin className="w-5 h-5 mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">{hospital.address}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Phone className="w-5 h-5 mr-2 text-gray-400" />
                                        <span className="text-sm">{hospital.phone}</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                        <div className={`flex items-center text-sm font-bold ${userLocation ? 'text-blue-600' : 'text-gray-400'}`}>
                                            <Navigation className="w-4 h-4 mr-1" />
                                            {userLocation ? `${hospital.distance} km` : '-- km'}
                                        </div>
                                        <div className="flex items-center text-green-600 text-sm font-medium">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {hospital.open}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-full text-center py-10 text-gray-500">
                            No hospitals found matching your criteria.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hospitals;
