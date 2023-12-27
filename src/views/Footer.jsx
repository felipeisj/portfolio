
const Footer = () => {
  return (
    <footer className="bg-gray-800 flex flex-col justify-center items-center text-white text-center p-4 min-h-[10rem]">
      <div className="flex justify-center space-x-4 ">
        <a href="https://github.com/felipeisj" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          GitHub
        </a>
        <a href="https://linkedin.com/in/felipe-salazar-jimenez" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          LinkedIn
        </a>
      </div>
      <div className="mt-2">
        © {new Date().getFullYear()} Felipe Salazar
      </div>
    </footer>
  );
};

export default Footer;