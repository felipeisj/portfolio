import Navbar from './Navbar';

const Header = () => {
    return (
      <header className="flex top-0 items-center my-4 justify-between w-full mx-auto max-w-4xl absolute">
          <h1 className="text-xl font-bold">Mi Portfolio</h1>
          <div>
            <Navbar />
          </div>
      </header>
    );
};

export default Header;