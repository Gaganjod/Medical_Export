import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { useEffect } from 'react';

const CompleteFirstAidGuide = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const detailedGuides = [
        {
            title: "CPR (Cardiopulmonary Resuscitation)",
            category: "Critical",
            description: "CPR is a lifesaving technique useful in many emergencies, including a heart attack or near drowning, in which someone's breathing or heartbeat has stopped.",
            steps: [
                "Scan the environment for danger. Do not approach if unsafe.",
                "Check for consciousness: Tap the shoulder and shout 'Are you okay?'.",
                "If no response, call 108 immediately.",
                "Check for breathing. If not breathing or only gasping, start CPR.",
                "Place the heel of one hand on the center of the chest.",
                "Place the other hand on top and interlock fingers.",
                "Push hard and fast: at least 2 inches deep and 100-120 compressions per minute.",
                "Allow the chest to recoil completely between compressions.",
                "Continue until help arrives or the person starts breathing."
            ],
            warnings: [
                "Do not stop CPR unless exhausted or help arrives.",
                "For untrained rescuers, perform hands-only CPR (no mouth-to-mouth)."
            ]
        },
        {
            title: "Choking (Heimlich Maneuver)",
            category: "Common",
            description: "Choking occurs when a foreign object lodges in the throat or windpipe, blocking the flow of air.",
            steps: [
                "Ask 'Are you choking?'. If they can speak, cough, or breathe, encourage them to cough.",
                "If they cannot speak/breathe: Stand behind them.",
                "Wrap your arms around their waist.",
                "Make a fist with one hand and place the thumb side just above their navel.",
                "Grab your fist with your other hand.",
                "Perform quick, upward abdominal thrusts.",
                "Repeat until the object is expelled or the person becomes unconscious."
            ],
            warnings: [
                "If the person becomes unconscious, lower them to the ground and start CPR."
            ]
        },
        {
            title: "Severe Bleeding",
            category: "Trauma",
            description: "Heavy bleeding can be life-threatening and requires immediate action to stop blood loss.",
            steps: [
                "Call 108 immediately.",
                "Have the injured person lie down.",
                "Remove debris from the wound (do not remove embedded objects).",
                "Apply firm, direct pressure with a clean cloth or bandage.",
                "Maintain pressure for at least 15-20 minutes.",
                "If blood soaks through, apply another layer on top. Do NOT remove the first layer.",
                "Check for circulation beyond the injury (toes/fingers)."
            ],
            warnings: [
                "Do not apply a tourniquet unless you are trained or bleeding is uncontrollable and life-threatening."
            ]
        },
        {
            title: "Burns and Scalds",
            category: "Trauma",
            description: "Damage to the skin or other organic tissue primarily caused by heat or radiation, radioactivity, electricity, friction or contact with chemicals.",
            steps: [
                "Remove the person from the heat source immediately.",
                "Cool the burn with cool (not cold) running water for 20 minutes.",
                "Remove tight items like rings or watches from the area before swelling starts.",
                "Cover the burn loosely with sterile gauze or cling wrap.",
                "Protect the burn from friction or pressure."
            ],
            warnings: [
                "Do not pop blisters.",
                "Do not apply ice, butter, or ointments to severe burns."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Fixed Sticky Header for Navigation */}
            <div className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-40 px-4 py-3 flex items-center justify-between">
                <div className="max-w-7xl mx-auto w-full flex items-center">
                    <Link to="/" className="inline-flex items-center text-gray-700 hover:text-red-600 font-bold transition p-2 rounded-lg hover:bg-gray-100 group">
                        <div className="bg-gray-200 p-2 rounded-full mr-3 group-hover:bg-red-100 transition-colors">
                            <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
                        </div>
                        Back to Home
                    </Link>
                    <span className="ml-6 text-xl font-bold text-gray-800 hidden sm:block">Detailed Guide</span>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-red-500 pb-4 inline-block">
                        Complete First Aid Guide
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Detailed step-by-step instructions for handling common medical emergencies.
                        <br />
                        <span className="text-red-600 font-bold text-sm uppercase tracking-wide">Disclaimer: This guide is for information only. Always call 108 in emergencies.</span>
                    </p>
                </div>

                <div className="space-y-12">
                    {detailedGuides.map((guide, index) => (
                        <div key={index} id={guide.title.toLowerCase().replace(/\s+/g, '-')} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-slate-900 text-white px-8 py-6 flex justify-between items-center bg-gradient-to-r from-slate-900 to-slate-800">
                                <h2 className="text-2xl font-bold flex items-center">
                                    <Info className="w-6 h-6 mr-3 text-red-400" />
                                    {guide.title}
                                </h2>
                                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${guide.category === 'Critical' ? 'bg-red-500' :
                                        guide.category === 'Trauma' ? 'bg-orange-500' : 'bg-blue-500'
                                    }`}>
                                    {guide.category}
                                </span>
                            </div>

                            <div className="p-8">
                                <p className="text-gray-700 mb-6 text-lg leading-relaxed border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 rounded-r shadow-inner">
                                    {guide.description}
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                                        Action Steps
                                    </h3>
                                    <ol className="list-decimal list-inside space-y-3">
                                        {guide.steps.map((step, i) => (
                                            <li key={i} className="text-gray-700 text-lg pl-2 border-b border-gray-50 pb-2 last:border-0 hover:bg-gray-50 transition p-2 rounded">
                                                {step}
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                                {guide.warnings.length > 0 && (
                                    <div className="bg-red-50 border border-red-100 rounded-xl p-6 relative">
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-red-400 rounded-l-xl"></div>
                                        <h3 className="text-red-800 font-bold mb-3 flex items-center">
                                            <AlertTriangle className="w-5 h-5 mr-2" />
                                            Critical Warnings
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-red-700">
                                            {guide.warnings.map((warning, i) => (
                                                <li key={i}>{warning}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center bg-gradient-to-br from-blue-900 to-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Need Professional Help?</h3>
                        <p className="mb-8 opacity-90 text-lg">If the situation is critical, do not hesitate to call emergency services immediately.</p>
                        <a href="tel:108" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transform transition hover:scale-105 border-4 border-red-500/30">
                            Call 108 Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompleteFirstAidGuide;
