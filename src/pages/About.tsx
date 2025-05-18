import React from 'react';
import { motion } from 'framer-motion';
import { History, Target, Award, Users } from 'lucide-react';
import fp from '../images/factory.png';

const About = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Shivanand Plastic Ind</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A trusted name in plastic manufacturing, delivering quality solutions since 2012.
          </p>
        </motion.div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={fp}
              alt="Factory and plastic packaging"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Incorporated in the year 2012, we, Shivanand Plastic Ind, are engaged in manufacturing,
              exporting, and supplying a wide and comprehensive range of high-quality packaging
              products such as HDPE bottles, jars, eye dropper bottles, cream jars, crown cap bottles,
              oval shape bottles, round containers, and more.
            </p>
            <p className="text-gray-600 mb-4">
              Crafted using premium-grade HDPE plastic materials, our products are known for their
              durability, heat resistance, and high strength-to-density ratio. Designed for ease of use
              and reliable performance, our solutions are highly demanded across sectors like Chemical,
              Cosmetic, Edible Oil, Food & Beverage, Paint, Petrochemical, and Pharmaceutical industries.
            </p>
            <p className="text-gray-600">
              At Shivanand Plastic Ind, we are committed to innovation, quality, and customer satisfaction,
              ensuring that each product meets the highest standards of functionality and aesthetics.
            </p>
          </motion.div>
        </div>

        {/* Company Values */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Innovation',
                description: 'Constantly pushing boundaries in plastic manufacturing'
              },
              {
                icon: Award,
                title: 'Quality',
                description: 'Maintaining the highest standards in every product'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Working closely with clients to ensure success'
              },
              {
                icon: History,
                title: 'Reliability',
                description: 'Delivering consistent results on time, every time'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
