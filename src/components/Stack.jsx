import React from "react";
import Footer from "./Footer";

// Tech stack data (Icon URLs + Labels)
const techStack = [
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

const Portfolio = () => {
  return (
    <div className="bg-white min-h-[calc(100vh-56px)] flex flex-col items-center mt-20">

      {/* Tech Stack Title */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mt-10">TECH STACK</h1>
        <p className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">
          Technologies I've been working with recently
        </p>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-20 mt-32">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={tech.img} alt={tech.name} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
            <p className="mt-2 text-sm sm:text-lg font-semibold text-gray-800">{tech.name}</p>
          </div>
        ))}
      </div>

      <div className="w-full mt-48  ">
        <Footer/>
      </div>
    </div>
  );
};

export default Portfolio;
