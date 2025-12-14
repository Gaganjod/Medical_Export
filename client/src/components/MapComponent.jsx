import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = ({ position, label, height = "400px" }) => {
    if (!position || !position.lat || !position.lng) {
        return <div className="bg-gray-200 h-64 flex items-center justify-center">Loading Map...</div>;
    }

    return (
        <MapContainer center={[position.lat, position.lng]} zoom={15} style={{ height: height, width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[position.lat, position.lng]}>
                <Popup>
                    {label || "Current Location"}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
