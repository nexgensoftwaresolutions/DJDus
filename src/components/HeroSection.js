import React from 'react';
import { motion } from 'framer-motion';
import image from './image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

export const HeroSection = ({ language }) => {
  return (
    <section className="bg-gray-100 font-poppins py-16 lg:py-24 font-poppins"> {/* Adjusted padding for consistency */}
      <div className="container mx-auto flex  font-poppins flex-col lg:flex-row items-center justify-between lg:space-x-12 px-6 lg:px-0">
        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 lg:max-w-md text-center lg:text-left"
        >
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-gray-900 leading-snug">
            {language === 'English'
              ? <>
                  Are you seeking the <span className="text-indigo-600 font-poppins underline font-extrabold">Best DJ</span> in Dire Dawa?
                </>
              : language === 'Amharic'
              ? <>
                  በድሬ ዳዋ ምርጥ <span className="text-indigo-600  font-poppins underline font-extrabold">ዲጀይ</span> ትፈልጋለህ?
                </>
              : <>
                  <span className="text-indigo-600 underline font-poppins font-extrabold">DJ Waliin Awwaaloo</span> Dire Dawa keessatti barbaadaa?
                </>}
          </h2>
          <p className="text-gray-700 text-lg font-poppins lg:text-xl leading-relaxed tracking-wide">
            {language === 'English'
              ? 'Organize your events effortlessly with DJ Dus and reach more audiences. From weddings to graduations, we’ve got you covered with top-notch performances and event management.'
              : language === 'Amharic'
              ? 'የእንቅስቃሴዎችን አቅም በማሻሻል እና ከዲጀይ ዱስ ጋር ምርጥ አካባቢዎችን በመደራደር እና የሙዚቃን ማስተካከል በማስተዋወቅ ምርጥ አገልግሎቶችን ይቀበሉ።'
              : 'Sagantaa keessan salphatti qopheessaa, DJ Dus waliin hojiiwwan cimaa fi nama hawwataa ta’an akka salphaatti qopheessa.'
            }
          </p>

          {/* Call-to-action with phone icon */}
          <div className="flex items-center font-poppins space-x-4 justify-center lg:justify-start">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-indigo-600 text-2xl" />
            <p className="text-lg lg:text-xl font-poppins text-gray-700 font-medium">
              {language === 'English' ? 'One phone call can change your event!' : 
              language === 'Amharic' ? 'አንድ ስልክ ጥሪ የእርስዎን ተስፋ ይለውጣል!' : 
              'Bilbilli tokkichi sagantaa keessan jijjiiruu danda’a!'}
            </p>
          </div>

          {/* Call Button */}
          <motion.a
            whileHover={{ scale: 1.08 }}
            className="inline-flex items-center font-poppins bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 mx-auto lg:mx-0"
            href="tel:+251915149087"
          >
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-3" />
            {language === 'English' ? 'Call Now' : language === 'Amharic' ? 'አሁን ይደውሉ' : 'Amma Bilbilaa'}
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 mt-8 lg:mt-0"
        >
          <img
            src={image}
            alt="DJ Event"
            className="w-full rounded-lg shadow-lg font-poppins object-cover border-4 border-white transform transition duration-500 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};
