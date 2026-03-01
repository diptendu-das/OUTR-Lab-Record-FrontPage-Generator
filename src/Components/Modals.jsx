import React from 'react';
import { Mail, Phone, Github, Linkedin, X } from 'lucide-react';

export const Modals = ({ activeModal, onClose }) => {
    if (!activeModal) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
            {/* Click outside to close */}
            <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>

            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <h3 className="text-xl font-bold text-slate-800 capitalize flex items-center gap-2">
                        {activeModal === 'about' && <span className="text-blue-500">ℹ️ About</span>}
                        {activeModal === 'help' && <span className="text-emerald-500">🤝 Help & Support</span>}
                        {activeModal === 'contact' && <span className="text-violet-500">📞 Contact Me</span>}
                    </h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-full transition-colors focus:outline-none flex items-center justify-center">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body Details */}
                <div className="p-6">
                    {/* About Modal */}
                    {activeModal === 'about' && (
                        <div className="flex flex-col gap-4 text-slate-600">
                            <p className="leading-relaxed">This modern <strong>Lab Record Cover Page Generator</strong> was designed to help students effortlessly create perfectly formatted, strict university-compliant cover pages in seconds.</p>
                            <ul className="flex flex-col gap-2 mt-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                <li><strong>Made By:</strong> Diptendu Das</li>
                                <li><strong>Year:</strong> 2025</li>
                                <li><strong>Version:</strong> 1.1.0</li>
                                <li><strong>Intent:</strong> Open-source student productivity</li>
                            </ul>
                        </div>
                    )}

                    {/* Help Modal */}
                    {activeModal === 'help' && (
                        <form className="flex flex-col gap-4 text-slate-600" onSubmit={(e) => { e.preventDefault(); alert("Thanks for the feedback! (Demo)"); onClose(); }}>
                            <p className="text-sm">Have suggestions, queries, or faced any issues? Let me know below.</p>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-slate-700">Your Email</label>
                                <input type="email" required placeholder="you@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all shadow-sm" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-slate-700">Message</label>
                                <textarea required rows="4" placeholder="Describe your issue or suggestion..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all shadow-sm resize-none"></textarea>
                            </div>
                            <button type="submit" className="mt-2 w-full py-2.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all active:scale-[0.98]">
                                Submit Message
                            </button>
                        </form>
                    )}

                    {/* Contact Modal */}
                    {activeModal === 'contact' && (
                        <div className="flex flex-col gap-6 text-slate-600">
                            <p className="text-sm">Feel free to reach out to me directly for collaborations or inquiries!</p>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:diptendudas522@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-violet-300 hover:bg-violet-50 transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-violet-500 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="font-semibold text-slate-700 group-hover:text-violet-700">diptendudas522@gmail.com</span>
                                </a>
                                <a href="tel:+916371137225" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-violet-300 hover:bg-violet-50 transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-violet-500 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="font-semibold text-slate-700 group-hover:text-violet-700">+91 6371137225</span>
                                </a>
                                <a href="https://github.com/diptendu-das" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-violet-300 hover:bg-violet-50 transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-violet-500 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all">
                                        <Github className="w-5 h-5" />
                                    </div>
                                    <span className="font-semibold text-slate-700 group-hover:text-violet-700">GitHub Profile</span>
                                </a>
                                <a href="https://www.linkedin.com/in/diptendu-das-35a614334" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-violet-300 hover:bg-violet-50 transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-violet-500 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                    <span className="font-semibold text-slate-700 group-hover:text-violet-700">LinkedIn Profile</span>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
