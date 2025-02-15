import React from "react";
import AtelierImg from "/src/assets/ProjImg/Atelier.png";
// import PortfolioImg from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeitGv7vPj2mPXRWNbUqD4nNWEol2S2-gFodVeYj0xNyF9O2LLQxWQYcl_bTnQFHnr7yM&usqp=CAU"
import AmazonImg from "/src/assets/ProjImg/Amazon.png";
import SpotifyImg from "/src/assets/ProjImg/Spotify.png";

import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Footer from "./Footer";

const ProjectCard = ({ title, description, techStack, liveLink, codeLink, image }) => {
  return (
    <div className="bg-white border-2 border-black text-white rounded-2xl overflow-hidden shadow-lg w-72 h-auto">
      <img src={image} alt={title} className="w-full h-48 object-cover border-b-2 border-black" />
      <div className="p-5">
        <h3 className="text-xl text-black font-bold mb-2">{title}</h3>
        <p className="text-black text-sm mb-4">{description}</p>
        <p className="text-black text-sm mb-4">
          <strong>Tech stack:</strong> {techStack.join(", ")}
        </p>
        <div className="flex justify-between items-center mt-4 ">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300"
          >
            <FaExternalLinkAlt className="mr-1" /> Live Preview
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300"
          >
            <FaCode className="mr-1" /> View Code
          </a>
        </div>
      </div>
    </div>
  );
};

function Project(){
    return(
        <div className="bg-white h-[calc(100vh-56px)]">

            {/* Heading */}
            <div className="flex justify-center flex-col items-center">
                <h1 className="mt-32 text-4xl font-bold ">PROJECTS</h1>
                <p className="text-lg font-semibold text-gray-800 mt-2 tracking-[0.1rem]">Things I've built so far</p>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-8 mt-20">
                <ProjectCard 
                    title="ATELIER" 
                    description="A development service provider." 
                    techStack={["React", "Tailwind", "JavaScript", "Framer motion", "SQL"]} 
                    liveLink="https://dev-atelier.vercel.app/" 
                    codeLink="https://github.com/Harsh-9818/Atelier-frontend" 
                    image={AtelierImg}
                />
                <ProjectCard 
                    title="PORTFOLIO" 
                    description="Portfolio of mine." 
                    techStack={["React", "TailwindCSS", "Framer motion", "Javascript"]} 
                    liveLink="#" 
                    codeLink="https://github.com/Harsh-9818/Portfolio" 
                    image="https://cdn-media-2.freecodecamp.org/w1280/5f9c9cfc740569d1a4ca3543.jpg"
                />
                <ProjectCard 
                    title="AMAZONE CLONE" 
                    description="Clone of Amazon.com." 
                    techStack={["HTML", "CSS"]} 
                    liveLink="#"
                    codeLink="https://github.com/Harsh-9818/Amazon-Clone" 
                    image={AmazonImg}
                />
                <ProjectCard 
                    title="SPOTIFY CLONE" 
                    description="Clone of Spotify." 
                    techStack={["HTML", "CSS"]} 
                    liveLink="#" 
                    codeLink="https://github.com/Harsh-9818/Spotify-clone" 
                    image={SpotifyImg}
                />
            </div>
            <div className="mt-58"> 
              <Footer/>
            </div>
        </div>
    )
}

export default Project;

export { ProjectCard };
