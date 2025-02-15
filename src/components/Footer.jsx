import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="w-full border-t border-black lg:h-80 flex justify-center">
            <div className="w-full max-w-screen-xl flex flex-col lg:flex-row md:flex-row justify-between items-start lg:items-start  py-10 m-8">

                {/* Logo Section */}
                <div className="lg:ml-10 mb-6 lg:mb-0 w-full">
                    <h1 className="font-bold text-2xl text-black flex gap-2"> PORTFOLIO</h1>
                </div>

                {/* Right side: Contact, Social, and Links in 3 separate columns */}
                <div className="flex flex-col lg:flex-row md:flex-row md:gap-16 gap-6 lg:gap-20 text-left w-full">

                    {/* Contact Section */}
                    <div className="flex flex-col w-full mb-3">
                        <a
                            href="mailto:harsh.tawar9818@gmail.com"
                            className="text-black"
                        >
                            harsh.tanwar9818@gmail.com
                        </a>
                        <p className="text-black pt-4">+91 8851983865</p>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col gap-3 w-full text-black mb-2">
                        <Link to="/about">About</Link>
                        <Link to="/stack">Tech Stack</Link>
                        <Link to="/project">Project</Link>
                        <a href="/harsh_resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Resume</a> {/* Updated */}

                    </div>

                    {/* Social Section */}
                    <div className="flex flex-col w-full">
                        <a
                            href="https://github.com/Harsh-9818"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.instagram.com/iamnotharsh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black pt-4"
                        >
                            Instagram
                        </a>

                        <a
                            href="https://www.linkedin.com/in/harshtanwar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black pt-4"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://x.com/ezharsh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black pt-4"
                        >
                            Twitter / X
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;
