
const Welcome = () => {
  return (
    <>
      <div className="flex flex-col justify-center md:justify-evenly mt-16 md:mt-32 md:m-0 h-auto md:h-64 text-white ">
          <span className="text-5xl font-bold ">
            <h1 className="text-6xl font p-2 min-w-fit h-auto font-bold bg-green-500 text-white rounded-md inline mr-2">
              Hey there,</h1>
              I&apos;m Felipe
          </span>
        <div className="max-w-xl mt-8 md:mt-2">
          <p className="text-lg">Full stack web developer and content creator. +2 years of experience. From Valdivia, Chile.
             Specialized in creating unique web applications with high quality code.</p>
          <ul className="flex flex-nowrap mt-2 gap-x-2">
            <li className="mr-2 " >
              <a href="https://linkedin.com/in/felipe-salazar-jimenez" 
              className="flex justify-center items-center p-1 gap-x-1 rounded-xl border border-white/10
                        hover:scale-110 hover:bg-white/10 duration-300">
                <img src="linkedin.svg" className="h-6 w-6 rounded-xl opacity-100 "/>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/felipeisj"
                className="flex justify-center items-center p-1 gap-x-1 rounded-xl border border-white/10
                          hover:scale-110 hover:bg-white/10 duration-300"
              >
                <img src="github.svg" className="h-6 w-6 opacity-100 hover:opacity-50 transition-opacity duration-300"/>
                Github
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="">
        <img src='me_brookl.jpg' className=" md:max-w-sm w-3/4 md:w-auto h-auto  my-8 md:my-0 rounded-full shadow-[0_0_100px_-10px_rgba(74,222,128,0.6)]" />
      </div>
    </>
  )
}

export default Welcome;