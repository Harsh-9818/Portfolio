import '/src/index.css'
function Home() {
    return(
        <div className="bg-white h-[calc(100vh-56px)] flex lg:flex-row items-center justify-between">
            <div className='font-bold text-5xl ml-32 flex flex-col justify-center'>
                <p>Hi, I am</p>
                <p className='text-yellow-500 mt-4 mb-4'>Harsh Tanwar</p>
                <p>Full Stack Developer</p>
            </div>
            <div className="flex w-40 h-40 w-40 h-40 lg:w-80 lg:h-80  justify-center items-center mr-32">
                <img src="/public/Img/profile.jpg" className="rounded-full" alt="Company logo" />
            </div>

        </div>
    )
}

export default Home

