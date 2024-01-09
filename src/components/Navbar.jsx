
const Navbar = () => {
  return (
    <header className="flex fixed w-full items-center bg-gradient-to-b from-[#242424] to-[#1a8b1a] text-white ">
      <div className="flex max-w-4xl font-bold justify-between mx-auto  w-full h-16">
        <h1 className="text-xl my-auto">Logo</h1>
        <nav className="flex ">
          <ul className="flex space-x-8 my-auto">
            <li>
              <a href="#welcome" className=" hover:text-slate-400 ">Inicio</a>
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
