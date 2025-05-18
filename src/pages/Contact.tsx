import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for any inquiries or support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 9662345903</p>
                    <p className="text-gray-600">+91 9724988249</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">shivanandplastic6@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                    31,34,43,44,45,46 Shyam Ind Estate Ubkhal<br />
                    kukarwada Ta-Vijapur Dist-Mehsana <br />
                    Gujarat , India , 382830

                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Thursday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-lg text-white">
              <h2 className="text-2xl font-bold mb-4">Quick Response</h2>
              <p className="mb-4">
                Our team typically responds within 24 hours during business days. For urgent matters, please call our support line.
              </p>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>Emergency Support: +91 9724988249 </span>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
            <div className="aspect-w-16 aspect-h-12 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1511613242124!2d72.6243313!3d23.563013899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c4bb4c0a2801f%3A0x68feda8c6f5e24ac!2sShivanand%20Plastic%20Ind.!5e0!3m2!1sen!2sin!4v1745153817563!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }} className="rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">🚗 Directions</h3>
              <p className="text-gray-600"> 
              Our facility is conveniently located in Kukarwada, just off the main road, making it easily accessible by both private and public transport.</p>
              <p className="text-gray-600">
              By Road:
              From Vijapur or Mehsana, head towards Kukarwada and continue on the main road. Look for Shyam Industrial Estate near Ubkhal Road. Our premises are located at Plot Nos. 31, 34, 43–46, inside the estate.
              </p>
              <p className="text-gray-600">
              Landmark:
              Opposite Ubkhal Road, inside Shyam Industrial Estate, near Kukarwada check post.
                </p>
                <p className="text-gray-600">
                By Train/Bus:
The nearest railway station is Vijapur Station, which is approximately 15–20 minutes away by vehicle.
Regular buses from Mehsana, Vijapur, and Gandhinagar stop at Kukarwada town. From the bus stop, it’s a short rickshaw ride to our unit.


                </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;