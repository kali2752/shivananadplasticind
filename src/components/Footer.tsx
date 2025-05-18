import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../images/logo.png'; // Update with your actual logo path
import brochurePDF from '../images/ShivananadPlasticInd.pdf';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + Company Info */}
          <div>
            <div className="flex items-center">
              <img
                src={logo}
                alt="Shivanand Plastic Ind Logo"
                className="h-14 w-14 object-contain mr-3"
              />
              <span className="text-1.5xl font-bold">Shivanand Plastic Ind</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Leading manufacturer of high-quality plastic products serving industries worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/clients" className="text-gray-400 hover:text-white">Clients</Link></li>
              <li>
  <a
    href={brochurePDF}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white"
  >
    Brochure
  </a>
</li>

            {/* <li><Link to="/inquiry" className="text-gray-400 hover:text-white">Inquiry</Link></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                +91 9662345903
                +91 9724988249
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                shivanandplastic6@gmail.com
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                31,34,43,44,45,46 Shyam Ind Estate Ubkhal,kukarwada
                Ta-Vijapur, Dist-Mehsana 382830
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Monday - Saturday: 9:00 AM - 6:00 PM</li>
              <li>Thursday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shivanand Plastic Ind All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
