"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const educationData = [
  { degree: "Bachelor of Science in Information Technology & Management ", school: "University of Moratuwa", year: "2021 - Present" },
];

const experienceData = [
  { position: "Software Engineer Intern", company: "Hasthiya IT", duration: "2024 Jan - 2024 July" },
  { position: "Associate Software Engineer", company: "Hasthiya IT", duration: "2024 July - Present" },
];

const Encryption = () => {
  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen w-full h-full bg-gray-900 text-white">
      {/* Header */}
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Education
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Experience
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="flex flex-row justify-center gap-10 mt-20 w-full px-10">
        {/* Education Section */}
        <div className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-[30px] font-semibold mb-4">Education</h2>
          <ul className="space-y-4">
            {educationData.map((edu, index) => (
              <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-[24px] font-semibold">{edu.degree}</h3>
                <p className="text-[18px]">{edu.school}</p>
                <p className="text-[16px] text-gray-400">{edu.year}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience Section */}
        <div className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-[30px] font-semibold mb-4">Experience</h2>
          <ul className="space-y-4">
            {experienceData.map((exp, index) => (
              <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-[24px] font-semibold">{exp.position}</h3>
                <p className="text-[18px]">{exp.company}</p>
                <p className="text-[16px] text-gray-400">{exp.duration}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Encryption;
