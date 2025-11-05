import React from "react";
import { motion } from "framer-motion";
import { Github, Star, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Stock News Sentiment Analyzer",
      description:
        "Streamlit app that pulls stock news, measures sentiment, easy to understand insights for users.",
      tech: "Python, Streamlit, pandas, BeautifulSoup4, yfinance, TextBlob",
      github: "https://github.com/nidhiii128/Stock-Analyzer",
      color: "yellow",
    },
    {
      title: "Expense Tracker & Receipt Scanner (GCP)",
      description:
        "Cloud-based smart expense tracker that uses OCR and AI to scan receipts (paper or digital), extract key data, and store everything in a centralized dashboard for analytics and budgeting.",
      tech: "React, Firestore, Google Cloud Storage",
      github: "https://github.com/nidhiii128/expense-tracker",
      color: "blue",
    },
    {
      title: "Employee Management System",
      description:
        "Android app to manage employee records with CRUD features.",
      tech: "Android (Java)",
      github:
        "https://github.com/Anomaly28/employee-management-android-using-java-",
      color: "pink",
    },
    {
      title: "Bill Generator Including GST",
      description:
        "Desktop app to generate bills with GST, includes billing, tax, and printable invoices.",
      tech: "Java Swing",
      github:
        "https://github.com/Anomaly28/bill-generator-including-gst---java",
      color: "blue",
    },
    {
      title: "Student Management System",
      description:
        "GUI-based app to manage student records. Add/view student info.",
      tech: "Java Swing",
      github:
        "https://github.com/Anomaly28/student-management-using-java-swing",
      color: "green",
    },
    {
      title: "QR Code Generator",
      description: "Generates QR code for any URL. Integrated with Firebase.",
      tech: "HTML, CSS, JavaScript, Firebase",
      github:
        "https://github.com/Anomaly28/qrcode-generator-using-firebase",
      color: "red",
    },
    {
      title: "Motivational Message Generator",
      description: "Displays random motivational quotes. Includes a to-do list.",
      tech: "HTML, JavaScript",
      github: "https://github.com/Anomaly28/motivationa_app_task_1",
      color: "purple",
    },
    {
      title: "IoT-Based Fire Detection System",
      description:
        "Real-time fire detection system using sensors and mobile alerts.",
      tech: "Arduino, Blynk",
      github: "https://github.com/your-username/fire-detection-iot",
      color: "blue",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-700 flex items-center justify-center py-20"
    >
      <div className="w-full mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-white mb-16 tracking-wide">

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-900 text-white rounded-2xl shadow-2xl p-6 border border-purple-700 overflow-hidden group hover:border-purple-400 transition-all duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-60 bg-gradient-to-tr from-purple-600 via-purple-700 to-transparent blur-xl transition-all"></div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 relative z-10 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 relative z-10">
                {project.description}
              </p>

              {/* Tech Stack */}
              <p className="text-sm text-purple-400 font-mono mb-4 relative z-10">
                ⚙️ {project.tech}
              </p>

              

              {/* Links */}
              <div className="flex items-center justify-between relative z-10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-purple-300 hover:text-purple-100 transition"
                >
                  <Github className="w-5 h-5" /> View Repo
                </a>
                              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
