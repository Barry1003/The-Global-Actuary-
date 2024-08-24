import { useState } from 'react';
import logo from '../../assets/globe-which-can-easily-modify-or-edit-vector-removebg-preview.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md  sticky top-0 w-full z-10">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="logo">
            <img src={logo} width={70} alt="logo" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold leading-tight">The Global Actuary</h1>
            <span className="text-sm font-light">Futurity Prowess Unleashed</span>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`flex-col md:flex-row md:flex items-center gap-6 ${isOpen ? 'flex' : 'hidden'} md:block`}>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Home</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Actuary Info</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Blog</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Contact</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Program List</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Plans & Pricing</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Portfolio</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Book Online</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
