import { useState } from "react";
import OUTR_LOGO from "../assets/imgFile/OUTR_LOGO.png";
import { Menu, X, Info, HelpCircle, Phone } from 'lucide-react';

export const Navbar = ({ setActiveModal }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = (modalName) => {
        setActiveModal(modalName);
        setIsMenuOpen(false);
    };

    return (
        <div className="relative z-50">
            {/* Main Navbar */}
            <div className="my-0 w-full bg-background text-amber-50 flex items-center gap-10 justify-around fixed top-0 z-50 shadow-md px-3.5">
                <img src={OUTR_LOGO} alt="Logo" className="h-[55px] p-2" />
                <h1 className="grow text-center text-xl font-bold text-amber-50 py-1.5 hidden sm:block">Lab Record Cover Page Generator</h1>
                <h1 className="grow text-center text-lg font-bold text-amber-50 py-1.5 sm:hidden">Cover Page Generator</h1>
                <div className="pr-3 lg:hidden flex self-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1 text-amber-50 focus:outline-none hover:text-blue-300 transition-colors">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="fixed top-[55px] left-0 w-full bg-slate-800 text-amber-50 z-40 lg:hidden shadow-lg border-t border-slate-700 animate-in slide-in-from-top-2 duration-200">
                    <div className="flex flex-col p-4 gap-2 font-medium">
                        <button
                            onClick={() => handleMenuClick('about')}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700 transition-colors text-left"
                        >
                            <Info className="w-5 h-5 text-blue-400" />
                            <span>About</span>
                        </button>
                        <button
                            onClick={() => handleMenuClick('help')}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700 transition-colors text-left"
                        >
                            <HelpCircle className="w-5 h-5 text-emerald-400" />
                            <span>Help & Support</span>
                        </button>
                        <button
                            onClick={() => handleMenuClick('contact')}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700 transition-colors text-left"
                        >
                            <Phone className="w-5 h-5 text-violet-400" />
                            <span>Contact Me</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
