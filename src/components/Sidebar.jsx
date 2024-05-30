import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  CalculatorIcon,
  Bars3Icon,
  XMarkIcon,
  PuzzlePieceIcon,
  PhoneIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import { Alert, IconButton, Typography } from '@material-tailwind/react';

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


  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className={`flex flex-col absolute z-[1000] ${isOpen ? 'lg:w-64 w-96' : 'w-16'} h-full bg-gray-800 text-white transition-width duration-700`}>
      <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
        {isOpen && <span className="text-xl font-bold">Calculators (Beta)</span>}

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
          <PhoneIcon className='min-w-6 h-6' />
          {isOpen && <span className='ml-3 min-w-60'>Contact</span>}
        </div>
        <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1">
          Upgrade to PRO
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
          and premium.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium">
            Upgrade Now
          </Typography>
        </div>
      </Alert>
      </nav>
    </div>
  );
};

export default Sidebar;
