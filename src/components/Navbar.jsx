
const Navbar = () => {
  return (
    <header className="flex fixed w-full items-center bg-gradient-to-r from-[#242424] to-[#04B404] text-white opacity-100">
      <div className="flex max-w-4xl justify-between mx-auto  w-full h-16">
        <h1 className="text-xl font-bold my-auto">Logo</h1>
        <nav className="flex ">
          <ul className="flex space-x-4 my-auto">
            <li>
              <a href="#welcome" className=" hover:text-blue-800">Inicio</a>
            </li>
            <li>
              <a href="#projects" className=" hover:text-blue-800">Projects</a>
            </li>
            <li>
              <a href="#about" className=" hover:text-blue-800">About</a>
            </li>
            {/* Agrega más elementos de navegación según sea necesario */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
