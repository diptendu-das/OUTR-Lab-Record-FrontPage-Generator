

export const Footer = ({ setActiveModal }) => {

    return (
        <div>
            <footer className="bg-background text-amber-50 text-md flex flex-col items-center w-full p-4 mt-auto z-[40] relative border-t border-slate-700/50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                <p className="text-center font-medium">📄 Cover Page Generator — Built for College Lab Record Submissions</p>
                <p className="text-center text-slate-400 mt-1">&copy; 2025 Diptendu Das | Made with ❤️ for students</p>
                <div className="flex gap-6 mt-4 text-blue-400 font-semibold">
                    <button onClick={() => setActiveModal('about')} className="hover:text-blue-300 hover:underline transition-colors focus:outline-none">About</button>
                    <button onClick={() => setActiveModal('help')} className="hover:text-emerald-300 hover:underline transition-colors focus:outline-none">Help</button>
                    <button onClick={() => setActiveModal('contact')} className="hover:text-violet-300 hover:underline transition-colors focus:outline-none">Contact</button>
                </div>
            </footer>
        </div>
    )
}