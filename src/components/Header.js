import React, { useState, useEffect } from 'react';
import { Link, Events } from 'react-scroll'; // Import Link and Events from react-scroll
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import icons for hamburger and close

export const Header = ({ language, onLanguageChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // To toggle the language dropdown
  const [menuOpen, setMenuOpen] = useState(false); // To toggle the mobile menu
  const [activeSection, setActiveSection] = useState('about'); // Track active section

  // Set the active link based on scroll position
  useEffect(() => {
    Events.scrollEvent.register('begin', function (to) {
      setActiveSection(to);
      setMenuOpen(false); // Close the menu on scroll navigation to any section
    });

    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, []);

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-md p-4 sticky top-0 w-full z-50 flex justify-between items-center"
        style={{ position: 'sticky', top: '0', zIndex: 50 }}
      >
        {/* Logo/Branding */}
        <h1 className="text-3xl font-extrabold text-indigo-600 tracking-tighter">
          DJ Dus
        </h1>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="block md:hidden text-3xl text-indigo-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="about"
            smooth={true}
            offset={-80} // Adjust for header height
            duration={500}
            className={`text-xl font-semibold transition duration-300 cursor-pointer ${
              activeSection === 'about'
                ? 'text-indigo-900'
                : 'text-gray-700 font-poppins hover:text-indigo-600'
            }`}
          >
            {language === 'English' ? 'About Us' : language === 'Amharic' ? 'ስለ እኛ' : 'Waa’ee Keenya'}
          </Link>
          <Link
            to="services"
            smooth={true}
            offset={-80} // Adjust for header height
            duration={500}
            className={`text-xl  font-poppins font-semibold transition duration-300 cursor-pointer ${
              activeSection === 'services'
                ? 'text-indigo-900'
                : 'text-gray-700 font-poppins hover:text-indigo-600'
            }`}
          >
            {language === 'English' ? 'Services' : language === 'Amharic' ? 'አገልግሎቶች' : 'Tajaajilawwan'}
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-80} // Adjust for header height
            duration={500}
            className={`text-xl font-poppins font-semibold transition duration-300 cursor-pointer ${
              activeSection === 'contact'
                ? 'text-indigo-900'
                : 'text-gray-700 font-poppins hover:text-indigo-600'
            }`}
          >
            {language === 'English' ? 'Contact' : language === 'Amharic' ? 'ያግኙን' : 'Nu Quunnamaa'}
          </Link>
        </nav>

        {/* Language Selector Dropdown */}
        <div className="relative">
          <button
            className="bg-indigo-600 font-poppins text-white px-4 py-2 rounded-lg shadow-lg flex items-center hover:bg-indigo-700 transition duration-300"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {language}
            <svg
              className={`w-4 h-4 ml-2 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {/* Language Dropdown */}
          {dropdownOpen && (
            <ul className="fixed  font-poppins right-0 mt-2 w-44 bg-white border border-gray-300 rounded-lg shadow-lg z-50 top-16">
              <li
                onClick={() => { onLanguageChange('English'); setDropdownOpen(false); }}
                className="cursor-pointer px-4 py-2 font-poppins text-gray-700 hover:bg-indigo-600 hover:text-white transition duration-300"
              >
                English
              </li>
              <li
                onClick={() => { onLanguageChange('Amharic'); setDropdownOpen(false); }}
                className="cursor-pointer px-4 py-2 font-poppins text-gray-700 hover:bg-indigo-600 hover:text-white transition duration-300"
              >
                አማርኛ (Amharic)
              </li>
              <li
                onClick={() => { onLanguageChange('Oromiffa'); setDropdownOpen(false); }}
                className="cursor-pointer px-4 py-2 font-poppins text-gray-700 hover:bg-indigo-600 hover:text-white transition duration-300"
              >
                Afaan Oromoo (Oromiffa)
              </li>
            </ul>
          )}
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white font-poppins shadow-lg z-50 p-4 sticky top-16 w-full space-y-4"  // Sticky Menu
        >
          <Link
            to="about"
            smooth={true}
            offset={-80}
            duration={500}
            className="block text-lg font-poppins text-gray-700 hover:text-indigo-600 cursor-pointer"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            {language === 'English' ? 'About Us' : language === 'Amharic' ? 'ስለ እኛ' : 'Waa’ee Keenya'}
          </Link>
          <Link
            to="services"
            smooth={true}
            offset={-80}
            duration={500}
            className="block text-lg font-poppins text-gray-700 hover:text-indigo-600 cursor-pointer"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            {language === 'English' ? 'Services' : language === 'Amharic' ? 'አገልግሎቶች' : 'Tajaajilawwan'}
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="block text-lg font-poppins text-gray-700 hover:text-indigo-600 cursor-pointer"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            {language === 'English' ? 'Contact' : language === 'Amharic' ? 'ያግኙን' : 'Nu Quunnamaa'}
          </Link>
        </motion.nav>
      )}

      {/* Add this padding to prevent content overlap with the sticky header */}
      <div className="pt-24"></div>
    </>
  );
};
