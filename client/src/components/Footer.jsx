import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center text-white text-2xl font-bold mb-6">
              <span className="text-red-500 mr-2">❤️</span> MediCare
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner in medical emergencies. We provide 24/7 emergency services and first aid guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-red-500 transition">
                  Emergency Services
                </a>
              </li>
              <li>
                <Link to="/first-aid-guide" className="hover:text-red-500 transition">
                  First Aid Guide
                </Link>
              </li>
              <li>
                <a href="#hospitals" className="hover:text-red-500 transition">
                  Find Hospitals
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency Numbers */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Emergency Numbers</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Ambulance</span>
                <span className="text-white font-mono">108</span>
              </li>
              <li className="flex justify-between">
                <span>Fire</span>
                <span className="text-white font-mono">101</span>
              </li>
              <li className="flex justify-between">
                <span>Police</span>
                <span className="text-white font-mono">100</span>
              </li>
              <li className="flex justify-between">
                <span>Women Helpline</span>
                <span className="text-white font-mono">1091</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-red-500 flex-shrink-0" />
                <span>
                  Phagwara H.O, Distt. Kapurthala,
                  <br />
                  Punjab - 144401, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-red-500 flex-shrink-0" />
                <span>+91-98765-43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-red-500 flex-shrink-0" />
                <span>help@medicare-phagwara.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © 2025 MediCare Emergency Services (Punjab). All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
