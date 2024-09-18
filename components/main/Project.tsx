import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Featured Works
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/blackfamily.png"
          title="Black Family Chat App"
          role="Back End Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/jcgn.png"
          title="JCGN Web App"
          role="Full Stack Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/pm.png"
          title="Project Management System HIT"
          role="Full Stack Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
         <ProjectCard
          src="/wattcheck.png"
          title="Watt Checker Mobile App"
          role="Back End Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/tangora.jpg"
          title="Tangora Admin Panel"
          role="Full Stack Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/oijo.png"
          title="Oi-Jo Car Rental Web Application "
          role="Full Stack Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        {/* Add more cards here if necessary */}
      </div>
    </div>
  );
};

export default Projects;
