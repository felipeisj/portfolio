
const Navbar = () => {
  return (
    <header className="flex w-full md:fixed bg-gray-800 items-center pt-4 text-white z-100
                      z-10 shadow-lg">
      <div className="flex max-w-4xl font-bold justify-center md:justify-end mx-auto w-full h-16">
        <nav className="flex">
          <ul className="flex space-x-12 my-auto">
            <li>
              <a href="#welcome" className=" hover:text-slate-400 ">Home</a>
            </li>
            <li>
              <a href="#projects" className=" hover:text-slate-400">Projects</a>
            </li>
            <li>
              <a href="#about" className=" hover:text-slate-400">About</a>
            </li>
            {/* Agrega más elementos de navegación según sea necesario */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
