import React from "react";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <div className="flex items-center justify-center mx-2 w-10">
            <h1 className="text-white ml-4 text-2xl">H.</h1>
          </div>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          {/* <FaLinkedin /> */}
          <a
            href="https://github.com/howiesoh"
            target="blank"
            className="hover:text-sky-500 duration-100"
          >
            <FaGithub />
          </a>
          {/* <FaInstagram /> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
