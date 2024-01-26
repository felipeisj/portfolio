
const Welcome = () => {
  return (
    <>
      <div className="flex flex-col justify-around md:h-64 text-white ">
          <span className="text-green-400 text-5xl font-bold ">
            <h1 className="text-6xl font p-4 min-w-fit h-auto font-bold bg-green-500 text-white rounded-md inline mr-2">
              Felipe</h1>
            Full Stack Dev
          </span>
        <div className="max-w-md mt-4">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quo ad placeat harum aut dolor, earum praesentium laudantium debitis in ex recusandae temporibus quisquam molestiae aliquid. Officiis eius ipsa minima!</p>
          <ul className="flex flex-nowrap mt-2">
            <li className="mr-1 " >
              <a href="https://linkedin.com/in/felipe-salazar-jimenez" >
                <img src="linkedin.svg" className="h-8 w-8 rounded-xl opacity-100 hover:opacity-50 transition-opacity duration-300"/>
              </a>
            </li>
            <li>
              <a href="https://github.com/felipeisj" >
                <img src="github.svg" className="h-8 w-8 opacity-100 hover:opacity-50 transition-opacity duration-300"/>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="">
        <img src='me_brookl.jpg' className="max-w-sm h-auto rounded-full shadow-[0_0_100px_-10px_rgba(74,222,128,0.6)]" />
      </div>
    </>
  )
}

export default Welcome;