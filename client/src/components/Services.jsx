import { Phone, Shield, Flame, Heart, AlertOctagon, Car, Siren, Stethoscope } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Phone className="w-8 h-8 text-red-500" />,
            title: "Ambulance",
            desc: "24/7 Emergency Medical Services",
            number: "108",
            bg: "bg-red-50",
            border: "border-red-100"
        },
        {
            icon: <Flame className="w-8 h-8 text-orange-500" />,
            title: "Fire Department",
            desc: "Fire Emergency Response",
            number: "101",
            bg: "bg-orange-50",
            border: "border-orange-100"
        },
        {
            icon: <Shield className="w-8 h-8 text-blue-500" />,
            title: "Police",
            desc: "Law Enforcement Emergency",
            number: "100",
            bg: "bg-blue-50",
            border: "border-blue-100"
        },
        {
            icon: <Heart className="w-8 h-8 text-pink-500" />,
            title: "Women Helpline",
            desc: "Women Safety & Support",
            number: "1091",
            bg: "bg-pink-50",
            border: "border-pink-100"
        },
        {
            icon: <AlertOctagon className="w-8 h-8 text-yellow-600" />,
            title: "Disaster Management",
            desc: "Natural Calamity Response",
            number: "108",
            bg: "bg-yellow-50",
            border: "border-yellow-100"
        },
        {
            icon: <Car className="w-8 h-8 text-slate-600" />,
            title: "Road Accident",
            desc: "Highway Emergency Help",
            number: "1073",
            bg: "bg-slate-50",
            border: "border-slate-100"
        },
        {
            icon: <Siren className="w-8 h-8 text-purple-600" />,
            title: "Anti-Poison",
            desc: "Poison Information Center",
            number: "1066",
            bg: "bg-purple-50",
            border: "border-purple-100"
        },
        {
            icon: <Stethoscope className="w-8 h-8 text-teal-600" />,
            title: "Mental Health",
            desc: "Psychological Support (Kiran)",
            number: "1800-599-0019",
            bg: "bg-teal-50",
            border: "border-teal-100"
        }
    ];

    return (
        <section id="services" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Services</h2>
                    <p className="text-gray-600">Quick access to all emergency helpline numbers. Tap to call immediately.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <a href={`tel:${service.number}`} key={index} className={`block p-6 rounded-xl border ${service.border} ${service.bg} hover:shadow-lg transition duration-300 transform hover:-translate-y-1`}>
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-full bg-white shadow-sm`}>
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
                            <div className="flex items-center text-lg font-bold text-gray-800 break-words">
                                <Phone className="w-4 h-4 mr-2 opacity-50 flex-shrink-0" />
                                {service.number}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
