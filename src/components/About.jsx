function About() {
    return(
        <div className="bg-white h-[calc(100vh-56px)]">

            {/* heading */}
            <div className="flex justify-center flex-col items-center">
                <h1 className="mt-20 text-3xl font-bold border border-black py-4 px-22 rounded">ABOUT ME</h1>
            </div>

            {/* about */}
            <div className="w-2/3 flex mt-15 mx-auto flex-col">
                <p className=" items-center justify-center text-center font-semibold text-lg">I'm a Full-stack developer with a strong foundation in DSA (C++) and expertise in React, Database, and Tailwind.<br/> At <a 
                href="https://dev-atelier.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
                >
                    Atelier
                </a>  (A development service provider), I build scalable and efficient web solutions, focusing on dynamic UI/UX, responsive designs and database integrations. Passionate about problem-solving and continuous learning, I thrive on creating impactful digital experiences.</p>

                <p className="items-center justify-center text-center font-semibold text-lg pt-10"> Let's connect and build something amazing!</p>
            </div>


            <div className="flex lg:flex-row flex-col">

                {/* Education */}
                <div className="mt-32 mx-auto">
                    <h1 className="font-semibold text-lg">Education:</h1>
                    <ul className="list-disc list-inside mt-3 font-semibold">
                        <li>10th | CBSE | 76% </li>
                        <li>12th | CBSE | PCM | 61%</li>
                        <li>BCA at DSEU | 2023-2026 | 9 cgpa</li>
                    </ul>
                </div>

                {/* social profile */}
                <div className="mt-32 mx-auto">
                    <h1 className="font-semibold text-lg">Social Profiles:</h1>
                    <ul className="list-disc list-inside mt-3 font-semibold">
                        <li><a href="https://github.com/Harsh-9818" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 hover:underline">Github</a></li>

                        <li><a href="https://www.linkedin.com/in/harshtanwar/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 hover:underline">LinkedIn</a></li>

                        <li><a href="https://x.com/ezharsh" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 hover:underline">Twitter / X</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div  className="mt-32 mx-auto">
                    <h1 className="font-semibold text-lg">Contact Me:</h1>
                    <ul className="list-disc list-inside mt-3 font-semibold">
                        <li>+91 8851983865</li>
                        <li>harsh.tanwar9818@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About




