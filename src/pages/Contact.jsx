import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="w-screen min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-700 flex items-center justify-center px-6 py-20 overflow-x-hidden"
    >
      <motion.div
        className="max-w-5xl w-full mx-auto text-white text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-extrabold mb-4 text-white tracking-wide">
          Get In Touch
        </h2>
        <p className="text-lg text-purple-200 mb-12">
          Interested in collaborating or just want to say hi? I’d love to hear from you!
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Email",
              text: "Nidhibhawari28@gmail.com",
            },
            {
              title: "Phone",
              text: "+91 9076273706",
            },
            {
              title: "Location",
              text: "India",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                {item.title}
              </h3>
              <p className="text-purple-100 break-all">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Buttons */}
        <motion.div
          className="flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://github.com/nidhiii128"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-purple-700/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/nidhi-bhawari/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all shadow-md hover:shadow-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <FaLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </a>

          {/* Fixed LeetCode button: brand hex, gradient, forced white icon for contrast */}
          <a
            href="https://leetcode.com/u/NidhiBhawari/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-700"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,161,22,1) 0%, rgba(255,141,45,1) 100%)",
              color: "#fff",
              boxShadow: "0 8px 24px rgba(255,161,22,0.12)",
            }}
          >
            <SiLeetcode className="text-lg text-white" />
            <span>LeetCode</span>
          </a>

          <a
            href="https://codeforces.com/profile/Anomaly28"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-all shadow-md hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <SiCodeforces className="text-lg" />
            <span>Codeforces</span>
          </a>
        </motion.div>

        <p className="mt-12 text-sm text-purple-300">
         
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
