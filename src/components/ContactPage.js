import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = ({ language }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-50 py-16"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-poppins  text-indigo-900 text-center mb-12">
          {language === 'English' ? 'Contact Us' : language === 'Amharic' ? 'አግኙን' : 'Nu Quunnamaa'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6 mx-auto font-poppins  text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-poppins  font-bold text-gray-900">
              {language === 'English' ? 'Our Office' : language === 'Amharic' ? 'ጽሁፋችን' : 'Waajjira Keenya'}
            </h3>
            <p className="text-gray-700 font-poppins  mt-2">
              {language === 'English'
                ? 'Feel free to reach out to us at the following contact details.'
                : language === 'Amharic'
                ? 'እባኮትን በአንዳንድ ማንኛውም ዝርዝሮች ያግኙን።'
                : 'Nu qunnamaa yookan odeeffannoo kana irratti nu qunnamuu ni dandeessu.'}
            </p>
            <p className="text-gray-700 font-poppins  ">
              <span className="font-bold font-poppins ">{language === 'English' ? 'Phone:' : language === 'Amharic' ? 'ስልክ:' : 'Bilbila:'}</span> +251 909 987
            </p>
            <p className="text-gray-700 font-poppins  ">
              <span className="font-bold font-poppins ">{language === 'English' ? 'Email:' : language === 'Amharic' ? 'ኢሜል:' : 'Imeeliin:'}</span> DJDus@gmail.com
            </p>
            <p className="text-gray-700 font-poppins  ">
              <span className="font-bold font-poppins  ">{language === 'English' ? 'Address:' : language === 'Amharic' ? 'አድራሻ:' : 'Teessoo:'}</span> Mesklegna, WalgaMall
            </p>
          </motion.div>

          {/* Google Map Embed */}
          <motion.div
            className="w-full h-64"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6389.559944122696!2d41.85974626845458!3d9.588315329844194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1633bc16a72db7ad%3A0x4ba9487f24d23a2f!2sDire%20Dawa%2C%20Ethiopia!5e0!3m2!1sen!2s!4v1694123144862!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              title="Dire Dawa Map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
