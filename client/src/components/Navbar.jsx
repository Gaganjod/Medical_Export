import { useNavigate, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id) => {
        setIsOpen(false); // Close mobile menu if open
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation then scroll
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home-hero')}>
                        <Heart className="h-8 w-8 text-red-600 fill-current animate-pulse" />
                        <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">MediCare</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => scrollToSection('home-hero')} className="text-gray-600 hover:text-red-500 font-medium transition">Home</button>
                        <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-red-500 font-medium transition">Services</button>
                        <button onClick={() => scrollToSection('first-aid')} className="text-gray-600 hover:text-red-500 font-medium transition">First Aid</button>
                        <button onClick={() => scrollToSection('hospitals')} className="text-gray-600 hover:text-red-500 font-medium transition">Hospitals</button>
                        <button onClick={() => navigate('/contact')} className="text-gray-600 hover:text-red-500 font-medium transition">Contact</button>

                        <a href="tel:108" className="bg-red-600 text-white px-5 py-2.5 rounded-full flex items-center hover:bg-red-700 transition shadow-lg hover:shadow-red-200 transform hover:-translate-y-0.5">
                            <Phone className="w-4 h-4 mr-2" />
                            Emergency: 108
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-red-500 focus:outline-none">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                        <button onClick={() => scrollToSection('home-hero')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-md">Home</button>
                        <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-md">Services</button>
                        <button onClick={() => scrollToSection('first-aid')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-md">First Aid</button>
                        <button onClick={() => scrollToSection('hospitals')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-md">Hospitals</button>
                        <a href="tel:108" className="block w-full text-center bg-red-600 text-white px-4 py-3 rounded-md mt-4 font-bold shadow-md">
                            Call Emergency: 108
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
