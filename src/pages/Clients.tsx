import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, ThumbsUp } from 'lucide-react';
import c1 from '../images/cleint1.png';
import c2 from '../images/cleint5.png';
import c3 from '../images/client3.png';
import c4 from '../images/cleint4.png';

const Clients = () => {
  const clients = [c1, c2, c3, c4];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies across industries
          </p>
        </motion.div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md"
            >
              <img src={logo} alt={`Client ${index + 1}`} className="h-12 object-contain" />
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-blue-600 rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            {[
              { icon: Star, number: '150+', label: 'Satisfied Clients' },
              { icon: Award, number: '12+', label: 'Years of Excellence' },
              { icon: ThumbsUp, number: '15+', label: 'Custom Packaging Designs Delivered' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
