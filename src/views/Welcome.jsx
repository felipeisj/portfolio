
const Welcome = () => {
  return (
    <div className="text-center p-8">
      <div className="flex p-4 bg-green-500 text-white rounded-full">
        <img src='coding.svg' className="my-auto mx-0 w-32 h-32"/>
        <h1 className="text-5xl font-bold pr-4 my-auto">
          Felipe, <span className="text-green-400">Full Stack Dev</span>
        </h1>
        <p className="max-w-lg mx-auto my-auto p-4 text-2xl text-center">
          Front & Back end developer who loves writing clean and efficient code
        </p>
      </div>
    </div>

  )
}

export default Welcome;