import React from "react";
import blackfamily from "../../public/blackfamily.png";
import jcgn from "../../public/jcgn.png"
import pm from "../../public/pm.png"
import wattcheck from "../../public/wattcheck.png"
import oijo from "../../public/oijo.png"
import tangora from "../../public/tangora.jpg"
import Image, { StaticImageData } from "next/image";

interface Props {
  src: string | StaticImageData;
  title: string;
  role: string;
  description: string;
}

const ProjectCard = ({ src, title, role, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">Role: {role}</p>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};
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
          src={blackfamily}
          title="Black Family Chat App"
          role="Back End Developer"
          description="The Black Family Chat App strengthens family bonds by offering 370+ randomly generated discussion questions, direct chat features, and social sharing, fostering meaningful, engaging family conversations."
        />
        <ProjectCard
          src={jcgn}
          title="JCGN Web App"
          role="Full Stack Developer"
          description="Jesus Center of Good News is an international, multicultural church offering educational resources, community engagement, health services, online shops, and social welfare programs. The website provides event details, career opportunities, donation options, and more."
        />
        <ProjectCard
          src={pm}
          title="Project Management System HIT"
          role="Full Stack Developer"
          description="A project management system was developed for Hasthiya IT to streamline the management of projects, employees, and tasks. This system enables efficient task assignment, progress tracking, and team collaboration, ensuring seamless workflow and project execution. It enhances overall productivity by providing a centralized platform for effective project and resource management."
        />
         <ProjectCard
          src={wattcheck}
          title="Watt Checker Mobile App"
          role="Back End Developer"
          description="The app lets users scan barcodes, compare energy costs, and receive personalized tips. Features include a product history log, energy calculators, and community-shared utility rates to help manage energy consumption efficiently and redeem rewards."
        />
          <ProjectCard
          src={oijo}
          title="Oi-Jo Car Rental Web Application "
          role="Full Stack Developer"
          description="The Oi-Jo Car Rental Web Application allows sellers to list vehicles for rent while renters can browse, track vehicles, manage payments, and utilize chat options for seamless communication, enhancing the overall rental experience for both parties."
        />
        <ProjectCard
          src={tangora}
          title="Tangora Admin Panel"
          role="Full Stack Developer"
          description="The Tangora Admin Panel, developed for Tangora Cleaning Company in Australia, manages clients, employees, cleaning schedules, and payment summaries, streamlining operations for efficient scheduling, employee management, and financial tracking."
        />
      
        {/* Add more cards here if necessary */}
      </div>
    </div>
  );
};

export default Projects;
