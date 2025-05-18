import React from 'react';
import { motion } from 'framer-motion';
import { Package, Shield, Ruler, Recycle } from 'lucide-react';

// // Original imports
// import apDabba from '../images/ap_dabba.png';
// import ap1 from '../images/ap1-bottle.png';
// import ap2 from '../images/ap2-bottle.png';
// import ap3 from '../images/ap3-bottle.png';
// import ap4 from '../images/ap4-bottle.png';
// import humicDabba from '../images/humic_dabba.png';
// import imidaBottle from '../images/imida-bottle.png';
// import monoBottle from '../images/mono-bottle.png';
// import newMonoBottle from '../images/new_mono-bottle.png';
// import screenshot1 from '../images/Screenshot 2025-03-27 225410.png';
// import screenshot2 from '../images/Screenshot 2025-03-27 225415.png';
// import screenshot3 from '../images/Screenshot 2025-03-27 225421.png';
// import screenshot4 from '../images/Screenshot 2025-03-27 225425.png';
// import square3 from '../images/square-3.png';
// import squareBottle from '../images/square-bottle.png';
// import tShape from '../images/t_Shape-bottle.png';
// import tringle from '../images/tringle-bottle.png';

// Additional imports for the remaining bottle images
import tabletcon from '../images/tablet container.jpg';
import newmono from '../images/newmono.jpg';
import sycap from '../images/syngenta cap.jpg';
import siJar from '../images/si-jar.jpg';
import imedacap from '../images/IMEDACAP.jpg';
import RoundShape from '../images/ROUNDSHAPE.jpg';
import JerryCann from '../images/jerrycan.jpg';
import siJar2 from '../images/si_jar.jpg';
import imeda from '../images/imeda 2.0.jpg';
import syngentaBottles from '../images/syngenta bottels.jpg';
import thayoDabba from '../images/thayo dabba.jpg';
import ep09Bottles from '../images/ep09 bottels.jpg';
import imedaBottles from '../images/imeda bottels.jpg';
import imedaBottels2 from '../images/imeda_bottels.jpg';
import SIJAR from '../images/SI-JAR-CAP.jpg';
import jerryCan from '../images/jerry can.jpg';
import monoBottels from '../images/mono bottels.jpg';
import monoBottles from '../images/mono bottles.jpg';
import newMonoBottels from '../images/new mono bottels.jpg';
import squareBottels2 from '../images/square bottels 2.jpg';
import squareBottels from '../images/square bottels.jpg';
import squareBottles from '../images/square bottles.jpg';
import squareMeasuringCap from '../images/square measuring cap.jpg';

const Products = () => {
  const products = [
    // Original products
    // {
    //   name: 'AP Dabba',
    //   description: 'Multipurpose chemical storage dabba.',
    //   image: apDabba,
    //   features: ['Chemical resistant', 'Durable body', 'Spill-proof design', 'Easy to label']
    // },
    // {
    //   name: 'AP-1 Bottle',
    //   description: 'General-purpose industrial use bottle.',
    //   image: ap1,
    //   features: ['Leak-proof', 'Ergonomic grip', 'Reusable', 'Eco-friendly']
    // },
    // {
    //   name: 'AP-2 Bottle',
    //   description: 'Strong bottle for liquid packaging.',
    //   image: ap2,
    //   features: ['High capacity', 'Non-toxic plastic', 'Durable', 'Clear labeling area']
    // },
    // {
    //   name: 'AP-3 Bottle',
    //   description: 'Used for storing pesticides and chemicals.',
    //   image: ap3,
    //   features: ['BPA free', 'Tightly sealed', 'Heat-resistant', 'Wide mouth']
    // },
    // {
    //   name: 'AP-4 Bottle',
    //   description: 'Perfect for fertilizers and agro-liquids.',
    //   image: ap4,
    //   features: ['Sturdy material', 'Lightweight', 'Compact shape', 'Easy to pour']
    // },
    // {
    //   name: 'Humic Dabba',
    //   description: 'Specifically designed for humic acid storage.',
    //   image: humicDabba,
    //   features: ['UV resistant', 'Black body', 'Strong cap', 'Long shelf life']
    // },
    // {
    //   name: 'Imida Bottle',
    //   description: 'Bottle used for Imidacloprid formulations.',
    //   image: imidaBottle,
    //   features: ['Chemical safe', 'Premium plastic', 'Reusable', 'Attractive design']
    // },
    // {
    //   name: 'Mono Bottle',
    //   description: 'Standard mono bottle for chemical use.',
    //   image: monoBottle,
    //   features: ['Secure cap', 'Sturdy neck', 'Wide base', 'Printable surface']
    // },
    // {
    //   name: 'New Mono Bottle',
    //   description: 'Updated version of mono bottle.',
    //   image: newMonoBottle,
    //   features: ['Stylish design', 'Ergonomic handling', 'Leak proof', 'Made from virgin plastic']
    // },
    // {
    //   name: 'Gibralic Bottle',
    //   description: 'Custom sample bottle display.',
    //   image: screenshot1,
    //   features: ['Demo design', 'Sample use', 'Not for sale', 'Concept art']
    // },
    {
      name: 'SI-JAR CAP',
      description: 'A secure and user-friendly cap, ideal for wide-mouth jars and containers.',
      image: SIJAR,
      features: ['Leak-resistant fit', 'Easy to Open and Reseal']
    },
    {
      name: 'New Mono Bottles',
      description: 'A sleek and durable packaging option designed for efficient liquid storage.',
      image: newmono,
      features: ['Modern mono-material design', 'Light-Weight and Eco-Friendly', 'Ideal For Industrial and Chemical Use']
    },
    {
      name: 'Syngenta Cap',
      description: 'Precision-engineered cap modeled after Syngenta standards, suitable for agrochemical containers.',
      image: sycap,
      features: ['Secure Closure', 'Tamper-evident seal']
    },
    {
      name: 'Tablet Container',
      description: 'Compact container designed for pharmaceutical tablets and supplements.',
      image: tabletcon,
      features: ['Moisture-Resistant', 'Easy-open Lid', 'Optimized for Dosage Storage']
    },
    {
      name: 'Imeda Cap',
      description: 'Ergonomic cap designed for improved handling and secure sealing.',
      image: imedacap,
      features: ['Comfortable Grip', 'High-seal Integrity', 'Compatible with various bottles']
    },
    {
      name: 'Round Shape Bottle',
      description: 'A versatile round bottle suited for multiple applications including pharma and chemicals.',
      image: RoundShape,
      features: ['Uniform Shape', 'Easy labeling Surface', 'Durable Material']
    },
    {
      name: 'Jerry Can',
      description: 'Heavy-duty canister prototype for bulk liquid storage and transport.',
      image: JerryCann,
      features: ['Sturdy Handle for Easy Carrying', 'Large Volume Capacity', 'Impact-Resistant body']
    },
    
    // Additional products
    {
      name: 'SI-JAR Collection',
      description: 'Premium cylindrical jars for specialized storage.',
      image: siJar,
      features: ['Multiple sizes', 'Chemical resistant', 'Secure screw caps', 'Durable design']
    },
    {
      name: 'SI-JAR Series 2',
      description: 'Advanced jar design for professional applications.',
      image: siJar2,
      features: ['Industrial grade', 'Various capacities', 'Tamper-evident options', 'High-quality finish']
    },
    {
      name: 'Syngenta Bottles',
      description: 'Specialized bottles for agricultural chemicals.',
      image: syngentaBottles,
      features: ['Agriculture specific', 'UV protected', 'Custom labeling area', 'Precise pouring']
    },
    {
      name: 'Thayo Dabba',
      description: 'Heavy-duty storage container for various applications.',
      image: thayoDabba,
      features: ['Strong construction', 'Airtight seal', 'Large capacity', 'Stackable design']
    },
    {
      name: 'EP09 Bottle Series',
      description: 'Premium bottles with unique ribbed design for better grip.',
      image: ep09Bottles,
      features: ['Ergonomic design', 'Multiple color options', 'Various sizes', 'Industry standard compatibility']
    },
    {
      name: 'IMEDA Bottle Collection',
      description: 'High-quality bottles for specialized chemical storage.',
      image: imedaBottles,
      features: ['Chemical resistant', 'Leak-proof design', 'Tamper-evident cap', 'Precision molded']
    },
    {
      name: 'IMEDA Premium Series',
      description: 'Advanced bottle design for professional applications.',
      image: imedaBottels2,
      features: ['Premium finish', 'Color-coded options', 'Custom branding area', 'Multiple sizes available']
    },
    {
      name: 'Jerry Can 5L',
      description: 'Heavy-duty jerry can for bulk liquid storage and transport.',
      image: jerryCan,
      features: ['Large 5L capacity', 'Built-in handle', 'Industrial strength', 'Secure screw cap']
    },
    {
      name: 'Mono Bottles Classic',
      description: 'Traditional mono bottle design with proven reliability.',
      image: monoBottels,
      features: ['Classic design', 'Reliable performance', 'Quality construction', 'Industry standard']
    },
    {
      name: 'Mono Bottles Premium',
      description: 'Enhanced mono bottles with superior quality materials.',
      image: monoBottles,
      features: ['Premium materials', 'Enhanced durability', 'Multiple cap options', 'Consistent quality']
    },
    {
      name: 'New Mono Bottle Series',
      description: 'Latest generation of mono bottles with improved features.',
      image: newMonoBottels,
      features: ['Updated design', 'Enhanced strength', 'Better chemical resistance', 'Improved cap system']
    },
    {
      name: 'Square Bottles Advanced',
      description: 'Modern square bottles with enhanced usability.',
      image: squareBottels2,
      features: ['Space-efficient design', 'Stable base', 'Easy to pour', 'Stackable for transport']
    },
    {
      name: 'Square Bottles Standard',
      description: 'Reliable square bottles for various applications.',
      image: squareBottels,
      features: ['Versatile use', 'Durable construction', 'Efficient storage', 'Custom labeling']
    },
    {
      name: 'Square Bottles Premium',
      description: 'High-end square bottles with superior quality.',
      image: squareBottles,
      features: ['Premium materials', 'Precision molding', 'Professional finish', 'Superior durability']
    },
    {
      name: 'Square Measuring Cap',
      description: 'Innovative square bottles with built-in measuring caps.',
      image: squareMeasuringCap,
      features: ['Built-in measuring system', 'Precise dosing', 'User-friendly design', 'Reduces waste']
    },
    {
      name: 'IMEDA 2.0',
      description: 'An upgraded version of the Imeda cap with enhanced ergonomics and functionality.',
      image: imeda,
      features: ['Improved Sealing System', 'Sleeker Design', 'Better user control']
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative plastic solutions for every industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
            >
              <div className="w-full bg-white flex justify-center items-center p-4 h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-contain bg-white"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Shield className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Product Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: 'Custom Solutions',
                description: 'Tailored products to meet your specific requirements'
              },
              {
                icon: Ruler,
                title: 'Precision Engineering',
                description: 'High-accuracy manufacturing for perfect fit and function'
              },
              {
                icon: Recycle,
                title: 'Sustainable Materials',
                description: 'Eco-friendly options available for conscious businesses'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;