
const Welcome = () => {
  return (
    <div className="text-center p-8">
      <div className="flex p-4 justify-between">
        <img src='coding.svg' className="my-auto mx-0 w-32 h-32 "/>
        <h1 className="text-5xl font-bold pr-2 p-2 my-auto bg-green-500 text-white rounded-md">
          Felipe
        </h1>
        <span className="text-green-400 text-4xl font-bold my-auto ml-1">Full Stack Dev</span>
        <div className="flex flex-col justify-around h-48">
          <img src='vite.svg' className="max-w-lg h-16" />
          <p className='max-w-lg mx-auto my-auto p-3 text-2xl text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. V
            </ p>
        </div>
      </div>
    </div>

  )
}

export default Welcome;