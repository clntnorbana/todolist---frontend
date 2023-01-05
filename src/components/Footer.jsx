import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full text-xs">
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
