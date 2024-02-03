
const Welcome = () => {
  return (
    <>
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:justify-evenly md:mt-32 h-auto md:h-64 text-white ">
          <span className="text-4xl md:text-5xl font-bold md:m-0">
            <h1 className="text-4xl md:text-6xl p-2 min-w-fit h-auto font-bold bg-green-500 text-white rounded-md inline mr-2">
              Hey there,</h1>
              I&apos;m Felipe
          </span>
        <div className="max-w-xl mt-8 md:mt-2">
          <p className="text-lg">Full stack web developer and content creator. +2 years of experience. From Valdivia, Chile.
             Specialized in creating unique web applications with high quality code.</p>
          <ul className="flex flex-nowrap mt-2 gap-x-2 items-center justify-center md:justify-start">
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
      <img src='me_brookl.jpg' className="mb-16 md:max-w-sm w-2/5 md:w-auto h-auto rounded-full shadow-[0_0_100px_-10px_rgba(74,222,128,0.6)]" />
    </>
  )
}

export default Welcome;