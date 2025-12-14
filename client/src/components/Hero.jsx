import { Link } from 'react-router-dom';
import { Phone, BookOpen, Activity } from 'lucide-react';

const Hero = () => {
    return (
        <div id="home-hero" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 lg:py-32 overflow-hidden text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                <div className="inline-flex items-center bg-white/10 text-red-400 border border-red-500/20 px-4 py-1 rounded-full text-sm font-semibold mb-6 animate-pulse backdrop-blur-sm">
                    <Activity className="w-4 h-4 mr-2" />
                    24/7 Emergency Services Available
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
                    Medical Emergency <br />
                    <span className="text-red-500">Response System</span>
                </h1>

                <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto mb-10 drop-shadow-md">
                    Instant access to emergency services, first aid guidance, and nearby hospitals.
                    Every second counts in an emergency.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/emergency" className="flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-xl shadow-[0_0_20px_rgba(220,38,38,0.5)] transform hover:scale-105 transition duration-300 ring-2 ring-red-500 ring-offset-2 ring-offset-slate-900">
                        <Phone className="w-6 h-6 mr-2" />
                        Call Emergency: 108
                    </Link>
                    <Link to="/first-aid-guide" className="flex items-center justify-center px-8 py-4 border border-white/20 text-lg font-medium rounded-full text-white bg-white/10 hover:bg-white/20 md:py-4 md:text-xl shadow-lg backdrop-blur-sm transition duration-300">
                        <BookOpen className="w-6 h-6 mr-2" />
                        First Aid Guide
                    </Link>
                </div>
            </div>

            {/* Background Decor Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay filter blur-[128px] opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full mix-blend-overlay filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>
    );
};

export default Hero;
