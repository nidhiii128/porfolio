import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/my-photo.jpg";

const Home = () => {
  const skills = [
    {
      title: "Frontend Development",
      description: "Java, Swing, React, Tailwind CSS",
       color: "from-purple-700 via-cyan-600 to-transparent",
    },
    {
      title: "Backend Development",
      description: "Node.js, MongoDB, MySQL",
      color: "from-purple-700 via-cyan-600 to-transparent",
    },
    {
      title: "Cloud & Tools",
      description: "GCP, Git, Azure",
      color: "from-purple-700 via-emerald-600 to-transparent",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-gradient-to-br from-black via-purple-1000 to-purple-600 pt-32 pb-20 overflow-hidden"
    >

      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        {/* Grid for Image and Intro Text */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-80 h-100 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={myPhoto}
                alt="Nidhi Bhawari"
                className="w-full h-full object-cover"
              />
            </div>
          </div>


          {/* Intro Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Hi, I'm{" "}
              <span className="text-purple-300 drop-shadow-md">
                Nidhi Bhawari
              </span>
            </h1>
            <p className="text-2xl text-purple-200 mb-4">
              Full Stack Developer
            </p>
            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              I’m passionate about building beautiful, responsive web applications that offer great user experiences. I focus on clean code, modern design, and solving real-world problems. Skilled in cloud hosting, Firebase, and authentication. I also contribute to open-source projects and love every bit of what I do.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-900 text-white rounded-2xl shadow-2xl p-6 border border-purple-700 overflow-hidden group hover:border-purple-00 transition-all duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Glowing Background */}
              <div
                className={`absolute inset-0 opacity-30 group-hover:opacity-60 bg-gradient-to-tr ${skill.color} blur-xl transition-all`}
              ></div>

              {/* Skill Title */}
              <h3 className="text-2xl font-bold mb-3 relative z-10 group-hover:text-purple-300 transition-colors">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 relative z-10">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
