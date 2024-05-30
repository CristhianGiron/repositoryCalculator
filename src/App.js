import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Converter from "./components/Converter";
import Sidebar from "./components/Sidebar";
import MainContent1 from "./components/MainContent1";
import MainContent2 from "./components/MainContent2";
import DefaultContent from "./components/MainContent3.jsx";
import MainContent3 from "./components/MainContent4";




function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [option, setOption] = useState(0);

  const handleSidebarToggle = (isOpen) => {
    setIsOpenSidebar(isOpen);
  };

  const handleOptionChange = (index) => {
    setOption(index);
  };

  return (
    <Router>
      <div className="flex h-screen overflow-y-hidden">
        <Sidebar SendOpen={handleSidebarToggle} indice={handleOptionChange} />
        <div className={`flex-1 pl-16`}>
          <header className="flex items-center justify-between h-16 bg-gray-900 text-white shadow px-4">
            {!isOpenSidebar ? <span className="text-xl font-bold">Calculators</span> : <div></div>}
            <nav>
              <Link to="/profile" className="text-gray-800 hover:text-gray-600">Profile</Link>
              <Link to="/logout" className="ml-4 text-gray-800 hover:text-gray-600">Logout</Link>
            </nav>
          </header>
          <main className="p-4 overflow-y-scroll h-[90vh]">
            <Routes>
              <Route path="/content2" element={<DefaultContent />} />
              <Route path="/" element={<MainContent1 />} />
              <Route path="/content1" element={<MainContent2 />} />
              <Route path="/content3" element={<MainContent3 />} />
            </Routes>
            <div className="bg-black text-white text-center -ml-4 -mr-4 absolute bottom-0 left-0 w-[100vw]">Cristhian Girón @2024 Allright Reserved</div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
