import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="sticky top-[100vh] w-full text-xs mt-64">
      <div className="px-10 lg:px-40 py-5 flex justify-center align-center">
        <span className="flex opacity-75">
          Copyright <AiOutlineCopyrightCircle /> 2023 Clinton Orbaña - All
          rights reserved.{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
