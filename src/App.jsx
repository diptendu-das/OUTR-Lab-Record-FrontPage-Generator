import { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { ContentBox } from "./Components/ContentBox";
import { Footer } from "./Components/Footer";
import { Modals } from "./Components/Modals";
import { downloadPDF } from "./script";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <div className="flex flex-col h-full">
        <Navbar setActiveModal={setActiveModal} />
        <ContentBox className="h-95 " downloadPDF={downloadPDF} />
        <Footer setActiveModal={setActiveModal} />
      </div>

      <Modals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </>
  )
}

export default App;