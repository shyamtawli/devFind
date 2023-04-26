import React from "react";
import { FaCode, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Sidebar() {
  return (
    <div className=" mt-[2rem]  mb-[2rem] pl-[1.5rem] fixed top-0 left-0 w-[20rem] h-[90vh] border-r border-gray-500 font-mono">
      <div className="flex items-center gap-[1rem]  h-[3rem]">
        <div className="logo">
          <FaCode className="text-[2.5rem] text-white" />
        </div>
        <div className="flex font-bold text-[2rem]">
          <p className="dev text-white">dev</p>
          <p className="find text-[#00a6fb]">Find</p>
        </div>
      </div>
      <div className="text-white text-[1.3rem] mt-[1rem]">
        Discover and Connect with Skilled Developers.
      </div>
      <div >
        <p className="flex items-center gap-1rem mt-1rem text-white text-[1.5rem] font-bold ">Connect with Us </p>
        <div className="flex gap-5">
          <a href="https://github.com/shyamtawli/devFind" target="_blank" >

            <FaGithub className=" text-white text-[2rem] mt-4" />
          </a>
          <a href="https://twitter.com/shyam_tawli" target="_blank">

            <FaTwitter className="text-white text-[2rem] mt-4" />
          </a>
          <a href="https://www.linkedin.com/in/shyamtawli/" target="_blank">

            <FaLinkedin className="text-white text-[2rem] mt-4" />
          </a>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;
