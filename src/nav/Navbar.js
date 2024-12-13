import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Mobile icons
import { IoLogoBitcoin } from 'react-icons/io'; // Replace with your icon
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Chevron icons for dropdown

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // State to toggle Services dropdown

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle Services dropdown
  const handleServicesToggle = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center font-bold space-x-2">
            {/* Icon + Company Name */}
            <IoLogoBitcoin size={30} className="text-yellow-500 text-white" />
            <h1 className="text-1xl">
              Bit<span className="text-yellow-500 italic">flux</span>capital
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
          <Link to="/home" className="hover:text-gray-300 font-bold uppercase">Home</Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={handleServicesToggle} 
                className="flex items-center space-x-2 hover:text-gray-300 font-bold uppercase"
              >
                <span>Services</span>
                {servicesOpen ? (
                  <FaChevronUp className="text-white" />
                ) : (
                  <FaChevronDown className="text-white" />
                )}
              </button>
              {servicesOpen && (
                <div className="absolute left-0.3 mt-2 bg-black text-white w-48 py-2 rounded-md shadow-lg">
                  <Link to="/plan" className="block font-bold px-4 py-2">Pricing Plan</Link>
                  <Link to="/terms" className="block px-4 font-bold py-2">Terms & Conditions</Link>
                  <Link to="/admin-message" className="block px-4 py-2">Service 3</Link>
                </div>
              )}
            </div>

            <Link to="/about" className="hover:text-gray-300 font-bold uppercase">About Us</Link>
            <Link to="/contact" className="hover:text-gray-300 font-bold uppercase">Contact</Link>
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden md:flex">
            <button className="bg-yellow-600 text-white font-bold uppercase px-4 py-2 rounded-lg hover:bg-yellow-400">
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={handleMenuToggle} className="text-white">
              {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Sliding Menu */}
        <div
          className={`fixed inset-0 bg-black text-white z-40 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center space-x-2">
              {/* Icon + Company Name */}
              <IoLogoBitcoin size={30} className="text-white" />
              <h1 className="text-2xl font-bold">HospitalSite</h1>
            </div>
            <button onClick={handleMenuToggle} className="text-white">
              <FaTimes size={30} />
            </button>
          </div>
          <div className="flex flex-col space-y-4 px-6">
            <Link to="#home" className="text-lg">Home</Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button 
                onClick={handleServicesToggle} 
                className="flex items-center space-x-2 text-lg"
              >
                <span>Services</span>
                {servicesOpen ? (
                  <FaChevronUp className="text-white" />
                ) : (
                  <FaChevronDown className="text-white" />
                )}
              </button>
              {servicesOpen && (
                <div className="ml-4 flex flex-col space-y-2">
                  <Link to="#service1" className="text-lg">Service 1</Link>
                  <Link to="#service2" className="text-lg">Service 2</Link>
                  <Link to="#service3" className="text-lg">Service 3</Link>
                </div>
              )}
            </div>

            <Link to="#about" className="text-lg">About Us</Link>
            <Link to="#contact" className="text-lg">Contact</Link>
          </div>

          {/* Connect Wallet Button in Mobile Menu */}
          <div className="px-6 mt-4">
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-400 w-full">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
