import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = ({ theme, setTheme }) => {
  return (
    <header className="px-10 lg:px-40 py-5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">To do list</h1>
        <span
          className={`text-${
            theme ? "white" : "black"
          } text-2xl cursor-pointer`}
          onClick={() => setTheme(!theme)}
        >
          {theme ? <MdLightMode /> : <MdDarkMode />}
        </span>
      </div>
    </header>
  );
};

export default Header;
