import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Truck, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
        <img
            src="https://i.ibb.co/JWRpzDn5/HOMEPAGE.png"
            alt="Manufacturing facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovation in Plastic Manufacturing
            </h1>
            <p className="text-xl mb-8">
              Leading the industry with cutting-edge plastic solutions for diverse applications
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Excellence in every aspect of plastic manufacturing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Factory,
                title: 'Modern Facility',
                description: 'State-of-the-art manufacturing equipment and processes'
              },
              {
                icon: Award,
                title: 'Quality Assured',
                description: 'ISO certified manufacturing with rigorous quality control'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Skilled professionals with years of industry experience'
              },
              {
                icon: Truck,
                title: 'Global Delivery',
                description: 'Reliable shipping to customers worldwide'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your plastic manufacturing needs
          </p>
          <Link
            to="/inquiry"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Submit an Inquiry
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
