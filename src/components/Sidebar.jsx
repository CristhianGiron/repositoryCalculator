import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  CalculatorIcon,
  Bars3Icon,
  XMarkIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import { IconButton } from '@material-tailwind/react';

const Sidebar = ({ SendOpen, indice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    SendOpen(!isOpen);
  };

  const navigateTo = (path, index) => {
    navigate(path);
    indice(index);
  };

  return (
    <div className={`flex flex-col absolute ${isOpen ? 'lg:w-64 w-96' : 'w-16'} h-full bg-gray-800 text-white transition-width duration-700`}>
      <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
        {isOpen && <span className="text-xl font-bold">Calculators</span>}

        <IconButton
          className="text-white"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <nav className="flex-1 px-2 py-4">
        <div onClick={() => navigateTo('/', 1)} className={`py-2 px-4 rounded hover:bg-gray-700 flex transition-width duration-700 cursor-pointer ${!isOpen ? " justify-center" : 'justify-start'}`}>
          <HomeIcon className='min-w-6 h-6' />
          {isOpen && <span className='ml-3 min-w-60'>Home</span>}
        </div>
        <div onClick={() => navigateTo('/content1', 2)} className={`py-2 px-4 rounded hover:bg-gray-700 flex transition-width duration-700 cursor-pointer ${!isOpen ? " justify-center" : 'justify-start'}`}>
          <CalculatorIcon className='min-w-6 h-6' />
          {isOpen && <span className='ml-3 min-w-60'>Convert numbers</span>}
        </div>
        <div onClick={() => navigateTo('/content2', 3)} className={`py-2 px-4 rounded hover:bg-gray-700 flex  transition-width duration-700 cursor-pointer ${!isOpen ? " justify-center" : 'justify-start'}`}>
          <PuzzlePieceIcon className='min-w-6 h-6' />
          {isOpen && <span className='ml-3 min-w-60'>Operations Binary</span>}
        </div>
        <div onClick={() => navigateTo('/content3', 4)} className={`py-2 px-4 rounded hover:bg-gray-700 flex transition-width duration-700 cursor-pointer ${!isOpen ? " justify-center" : 'justify-start'}`}>
          <CalculatorIcon className='min-w-6 h-6' />
          {isOpen && <span className='ml-3 min-w-60'>Contact</span>}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
