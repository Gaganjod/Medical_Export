import { HeartPulse, Ban, Activity, Flame, Skull, AlertTriangle, ThermometerSun, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FirstAid = () => {
    const guides = [
        {
            title: "CPR (Cardiopulmonary Resuscitation)",
            steps: [
                "Check the person is unresponsive and not breathing normally",
                "Call emergency services immediately",
                "Place heel of hand on center of chest",
                "Push hard and fast (100-120 compressions/min)"
            ],
            warning: "Only perform if trained. Incorrect CPR can cause injury.",
            icon: <HeartPulse className="w-6 h6 text-red-500" />,
            bg: "bg-red-50"
        },
        {
            title: "Choking - Adult",
            steps: [
                "Ask 'Are you choking?' If they cannot speak or cough, proceed",
                "Stand behind the person and wrap arms around waist",
                "Make a fist with one hand, place above navel",
                "Thrust inward and upward until object is expelled"
            ],
            warning: "If person becomes unconscious, start CPR.",
            icon: <Ban className="w-6 h6 text-orange-500" />,
            bg: "bg-orange-50"
        },
        {
            title: "Severe Bleeding",
            steps: [
                "Apply direct pressure with clean cloth or bandage",
                "Keep pressure firm and continuous",
                "If blood soaks through, add more cloth - do not remove original",
                "Elevate the injured limb if possible"
            ],
            warning: "Wear gloves if available to prevent infection.",
            icon: <Activity className="w-6 h6 text-blue-500" />,
            bg: "bg-blue-50"
        },
        {
            title: "Burns & Scalds",
            steps: [
                "Cool the burn with cool or lukewarm running water for 20 minutes",
                "Remove clothing or jewelry near the burnt area (unless stuck)",
                "Cover with cling film or a clean plastic bag",
                "Keep the person warm"
            ],
            warning: "Do NOT use ice, creams, or oils.",
            icon: <Flame className="w-6 h6 text-red-400" />,
            bg: "bg-red-50"
        },
        {
            title: "Snake Bite",
            steps: [
                "Keep the person still and calm",
                "Call emergency services immediately",
                "Apply a pressure immobilization bandage if possible",
                "Mark the time of the bite"
            ],
            warning: "Do NOT suck out venom or cut the wound.",
            icon: <Skull className="w-6 h6 text-green-600" />,
            bg: "bg-green-50"
        },
        {
            title: "Heat Stroke",
            steps: [
                "Move person to a cool, shaded area",
                "Remove excessive clothing",
                "Cool down with wet towels or water spray",
                "Give small sips of water if conscious"
            ],
            warning: "Call 108 if person is confused or unconscious.",
            icon: <ThermometerSun className="w-6 h6 text-orange-600" />,
            bg: "bg-orange-50"
        },
        {
            title: "Electric Shock",
            steps: [
                "Do NOT touch the person until power is off",
                "Turn off the source of electricity if safe",
                "Call emergency services",
                "Start CPR if no breathing and safe to approach"
            ],
            warning: "Ensure your own safety first.",
            icon: <Zap className="w-6 h6 text-yellow-500" />,
            bg: "bg-yellow-50"
        },
        {
            title: "Fractures",
            steps: [
                "Control any bleeding first",
                "Immobilize the injured area (do not try to realign bone)",
                "Apply ice packs wrapped in cloth",
                "Treat for shock (keep warm and comfortable)"
            ],
            warning: "Do not move the person unless necessary.",
            icon: <AlertTriangle className="w-6 h6 text-purple-500" />,
            bg: "bg-purple-50"
        }
    ];

    return (
        <section id="first-aid" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick First Aid Guide</h2>
                    <p className="text-gray-600">Essential first aid knowledge that can save lives. Learn the basics of emergency response.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {guides.map((guide, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className={`p-4 ${guide.bg} flex items-center space-x-3 border-b border-gray-100`}>
                                {guide.icon}
                                <h3 className="text-lg font-bold text-gray-800">{guide.title}</h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-4 mb-6">
                                    {guide.steps.map((step, i) => (
                                        <li key={i} className="flex items-start text-gray-600">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">{i + 1}</span>
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-800 rounded">
                                    <strong>⚠️ Caution:</strong> {guide.warning}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        to="/first-aid-guide"
                        className="inline-block bg-white border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-600 hover:text-white transition duration-300 shadow-md transform hover:scale-105"
                    >
                        View Complete Guide &gt;
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FirstAid;
