import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample certificate data
const certificates = [
  {
    id: 1,
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    image: "/foragejpm.png",
  },
{
    id: 2,
    title: "Hacktober-Treenation",
    image: "/tree.jpg",
  },
{
    id: 3,
    title: "TCS - Soft Skills",
    image: "/tcs.jpg",
  },
{
    id: 2,
    title: "Mern Full Stack",
    image: "/mern.jpg",
  },
{
    id: 3,
    title: "Java Developer and DSA",
    image: "/java.png",
  },
{
    id: 4,
    title: "MySql",
    image: "/mysql.png",
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-black via-purple-900 to-purple-700 flex flex-col items-center justify-center py-20"
    >
      <div className="w-full max-w-screen-2xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-white mb-16 tracking-wide">
          My Certificates
        </h2>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="relative bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Thumbnail */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-2 bg-gray-800 text-white text-sm text-center truncate">
                {cert.title}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Preview */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-white rounded-lg overflow-hidden max-w-3xl w-full shadow-lg"
              onClick={(e) => e.stopPropagation()} // prevent closing on inner click
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full object-contain"
              />
              <div className="p-4">
                <h3 className="font-semibold text-xl">{selectedCert.title}</h3>
                <p className="text-gray-500">{selectedCert.issuer}</p>
                <button
                  className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                  onClick={() => setSelectedCert(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
