import React from 'react';
import { motion } from 'framer-motion';

const services = (language) => [
  {
    title: language === 'English' ? 'Car Rental with Driver' : language === 'Amharic' ? 'መኪና ኪራይ ከአሽከር' : 'Keessa Diraayivaarii fi Gaarii Ijaarsa',
    description: language === 'English'
      ? 'Rent premium cars with professional drivers for your events, airport pickups, and city tours.'
      : language === 'Amharic'
      ? 'ለዝግጅቶችዎ፣ አየር ማረፊያ መረጃዎች እና ከተሞች ጉብኝት ከሙያዊ አሽከር ጋር መኪኖችን ኪራይ ይቀበሉ።'
      : 'Karoora keessan, manneen barnootaa fi mannii waajira, keessattii, ijaarsa guddaaf fi dirsaa.ʼ',
    icon: '🚗',
  },
  {
    title: language === 'English' ? 'DJ for Events: Weddings & Graduations' : language === 'Amharic' ? 'ዲጀይ ለክብረትስክስ' : 'DJ Saganta, Fullee fi Aduulaan',
    description: language === 'English'
      ? 'Make your wedding, graduation, or any special event unforgettable with our professional DJ services.'
      : language === 'Amharic'
      ? 'በሙያዊ ዲጀይ አገልግሎቶች ወዳጆች እንቅስቃሴዎች ማንኛውንም አይነት ትምህርት ሽምግልን ያስታውሱ።'
      : 'Fullee fi sagantaa guddaa waliin hojii hedduu xiqqaachuu danda’aa.',
    icon: '🎤',
  },
  {
    title: language === 'English' ? 'Event Organization' : language === 'Amharic' ? 'ዝግጅቶች አንቀጽ እና አስተካከያ' : 'Qopheessituu Sagantaa',
    description: language === 'English'
      ? 'Complete event organization services that take care of planning, coordination, and execution to ensure your event is a success.'
      : language === 'Amharic'
      ? 'እንደአቅምንም ምርጥ አቀንቃኝ እና ቅድሚያ አገልግሎት ዝግጅት ይናገራል።'
      : 'Marii gamtaa, keessattii hojii hedduu salphaa sirreessa hojitti galchuu.',
    icon: '🎉',
  },
];

const ServicesPage = ({ language }) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-poppins text-indigo-900 text-center mb-12">
          {language === 'English' ? 'Our Services' : language === 'Amharic' ? 'አገልግሎቶቻችን' : 'Tajaajilawwan Keenya'}
        </h2>
        <div className="grid grid-cols-1 font-poppins md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services(language).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8  font-poppins rounded-lg shadow-lg text-center"
              // Added mobile-specific animations
              style={{ 
                transform: 'translateY(0)', 
                transition: 'transform 0.5s ease-in-out',
                '@media (max-width: 640px)': { // Tailored behavior for mobile
                  transform: 'scale(1)',
                  transition: 'transform 0.8s ease-in-out',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700  font-poppinsmb-6">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
