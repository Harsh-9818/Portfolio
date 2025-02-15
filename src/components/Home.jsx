import { Link } from "react-router-dom";
import { motion, stagger } from 'motion/react';
import Footer from "./Footer";
import Profile from '../assets/ProjImg/Profile.jpg';


const FadeInAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};

function Home() {
  return (
    <div className="bg-white text-black w-full min-h-screen overflow-hidden">
      <div className="font-sans px-4 lg:pt-48 pt-32 mb-12 flex flex-col md:flex-row justify-between items-center md:mb-60 ">
        {/* Left Section (Text) */}
        <motion.div variants={FadeInAnimation} initial="hidden" animate="show" className="w-full md:w-1/2 mx-4 md:mx-20 text-center md:text-left">
          <motion.div variants={FadeInAnimation}>
            <h1 className="tracking-[0.5rem] text-black-300 uppercase">Aspiring software developer </h1>
            <h1 className="text-4xl md:text-5xl font-extrabold pt-5 leading-tight">
              HARSH TANWAR
            </h1>
            <p className="pt-6 md:pt-10 w-[90%] mx-auto md:mx-0 leading-normal tracking-[0.1rem] text-black font-semibold">
            I'm a Full-stack developer with a strong foundation in DSA (C++) and expertise in React, Database, and Tailwind.
            At Atelier (A development service provider), I build scalable and efficient web solutions, focusing on dynamic UI/UX, responsive designs and database integrations. Passionate about problem-solving and continuous learning, I thrive on creating impactful digital experiences.
            </p>
          </motion.div>

          <motion.div variants={FadeInAnimation} className="mt-10 md:mt-10">
            <a  href="/harsh_resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="font-bold text-black border-2 border-black text-md h-12 w-40 rounded-full flex items-center justify-center mx-auto md:mx-0">Resume</button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={Profile}
          alt="Profile Image"
          className="w-42 h-42 md:w-64 md:h-64 object-cover rounded-full border-2 border-black shadow-lg"
        />
        </div>
      </div>

      <div className="mt-48"> 
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
