import { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { ContentBox } from "./Components/ContentBox";
import { Footer } from "./Components/Footer";
import { Modals } from "./Components/Modals";
import { downloadPDF } from "./script";
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [notification, setNotification] = useState(null);

  const handleDownload = async () => {
    setNotification({ type: 'loading', message: 'Generating PDF...' });

    // Slight delay to ensure the DOM is ready and the notification renders
    setTimeout(async () => {
      const success = await downloadPDF();
      if (success) {
        setNotification({ type: 'success', message: 'PDF downloaded successfully!' });
      } else {
        setNotification({ type: 'error', message: 'Failed to generate PDF.' });
      }

      setTimeout(() => {
        setNotification(null);
      }, 4000);
    }, 100);
  };

  return (
    <>
      <div className="flex flex-col h-full relative overflow-x-hidden">
        <Navbar setActiveModal={setActiveModal} />
        <ContentBox className="h-95 " downloadPDF={handleDownload} />
        <Footer setActiveModal={setActiveModal} />

        {/* Toast Notification for Downloads */}
        {notification && (
          <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-6 lg:right-10 z-[100] px-5 py-3.5 rounded-2xl shadow-blue-500/20 shadow-2xl border flex items-center gap-3 animate-in slide-in-from-bottom-5 fade-in duration-300 font-semibold text-sm whitespace-nowrap ${notification.type === 'success' ? 'bg-white border-green-200 text-slate-700' :
              notification.type === 'error' ? 'bg-white border-red-200 text-slate-700' :
                'bg-slate-800 border-slate-700 text-slate-50'
            }`}>
            {notification.type === 'loading' && <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />}
            {notification.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
            {notification.type === 'error' && <AlertCircle className="w-5 h-5 text-red-500" />}
            {notification.message}
          </div>
        )}
      </div>

      <Modals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </>
  )
}

export default App;