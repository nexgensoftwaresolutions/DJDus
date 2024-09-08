import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import { motion } from 'framer-motion'; // For animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For icons
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'; // Social media icons

const Footer = ({ language }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-teal-900 text-white py-16"
    >
      <div className="container mx-auto px-6">
        {/* The Best DJ in Dire Dawa Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-poppins font-bold text-white">
            {language === 'English' ? 'The Best DJ in Dire Dawa' : language === 'Amharic' ? 'በድሬ ዳዋ ምርጥ ዲጀይ' : 'DJ Waliin Awwaaloo Dire Dawa Keessatti'}
          </h2>
          <p className="text-white font-poppins mt-2">
            {language === 'English'
              ? 'Elevating events with music, lights, and entertainment like never before.'
              : language === 'Amharic'
              ? 'ክብርን በሙዚቃ፣ ብርሃን እና መዝናኛ እንዲህ በቀላሉ አማልክህ ማድረግ እንደሌላችኋል።'
              : 'Sirna garaagaraa fi miidhagina sirna irratti hirmaannaa sababa ta\'u!'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-6 font-poppins text-white">{language === 'English' ? 'About DJ Dus' : language === 'Amharic' ? 'ስለ DJ Dus' : 'Waa\'ee DJ Dus'}</h3>
            <p className="text-white font-poppins leading-relaxed">
              {language === 'English'
                ? 'DJ Dus offers professional DJ services for weddings, graduations, corporate events, and more.'
                : language === 'Amharic'
                ? 'DJ Dus ለሰርቶች፣ ትምህርቶች እና አካላት አድናቆች ሙዚቃ እንደ ምንጭ ማካተት እንደሚሆን።'
                : 'DJ Dus tajaajila naannawaa fi bakka waantoota hedduudhaaf akka gaarii ta\'u dhiheessina.'}
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-6 font-poppins text-white">{language === 'English' ? 'Quick Links' : language === 'Amharic' ? 'ፈጣን አገልግሎቶች' : 'Hawaasa Furtuun'}</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-white font-poppins hover:text-gray-300 transition duration-300 cursor-pointer"
                >
                  {language === 'English' ? 'About Us' : language === 'Amharic' ? 'ስለ እኛ' : 'Waa’ee Keenya'}
                </Link>
              </li>
              <li>
                <Link
                  to="events"
                  smooth={true}
                  duration={500}
                  className="text-white font-poppins hover:text-gray-300 transition duration-300 cursor-pointer"
                >
                  {language === 'English' ? 'Services' : language === 'Amharic' ? 'አገልግሎቶች' : 'Tajaajilawwan'}
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-white font-poppins hover:text-gray-300 transition duration-300 cursor-pointer"
                >
                  {language === 'English' ? 'Contact' : language === 'Amharic' ? 'አግኙን' : 'Nu Quunnamaa'}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-6 font-poppins text-white">{language === 'English' ? 'Follow Us' : language === 'Amharic' ? 'እኛን ተከተሉ' : 'Nu Hordofa'}</h3>
            <motion.div 
              className="flex items-center space-x-8 justify-center md:justify-start"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.2,
                  },
                },
                hidden: {
                  opacity: 0,
                },
              }}
            >
              <motion.a 
                href="#"
                variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/dj.dus1?igsh=MWE1ZXYzcm9saTVnaA=="
                variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </motion.a>
              <motion.a 
                href="https://www.tiktok.com/@djdusforwedding"
                variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Developed by Section */}
        <motion.div
          className="mt-12 border-t border-gray-500 pt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-white font-poppins mb-4">
            &copy; {new Date().getFullYear()} DJ Dus. All Rights Reserved.
          </p>
          <p className="text-white font-poppins">
            {language === 'English' ? 'Developed by ' : language === 'Amharic' ? 'የተሰራ በ ' : 'Develepheessaa'}
            <a 
              href="https://nexgensoftwaresolutions.github.io/Nexgen.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300 transition duration-300"
            >
              Nexgen Software Solutions
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
