import '/src/index.css'
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState for mobile menu toggle
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

function Header() {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

    return (
        <div className='fixed top-0 left-0 w-full bg-white z-50 h-16 flex items-center justify-between border-b border-black px-6 lg:px-32'>

            {/* Logo Section */}
            <div className='font-bold text-xl'>
                <Link to="/">PORTFOLIO</Link>
            </div>

            {/* Desktop Navigation (Hidden on Small Screens) */}
            <div className='hidden lg:flex font-bold gap-10'>
                <Link to="about">About</Link>
                <Link to="stack">Tech Stack</Link>
                <Link to="project">Projects</Link>
                <a href="/harsh_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>

            {/* Mobile Menu Button (Only Visible on Small Screens) */}
            <div className='lg:hidden'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28 } />} 
                </button>
            </div>

            {/* Mobile Navigation Menu (Shown When Open) */}
            {isOpen && (
                <div className='absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-5 py-4 lg:hidden'>
                    <Link to="about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="stack" onClick={() => setIsOpen(false)}>Tech Stack</Link>
                    <Link to="project" onClick={() => setIsOpen(false)}>Projects</Link>
                    <a href="/harsh_resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Resume</a>
                </div>
            )}
        </div>
    );
}

export default Header;
