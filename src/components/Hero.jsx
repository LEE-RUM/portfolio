import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row justify-start items-center h-full overflow-hidden" id="hero">
      <div className="text-center md:text-left p-36">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-300 mb-4">
          Hi! My name is-
        </h1>
        <p className="text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6">
          Lirim Mehmeti.
        </p>
        <p className="text-2xl md:text-2xl lg:text-3xl text-white font-bold mb-6">
          Software developer. <span className="text-gray-400">A developer who also teaches kids how to program!</span>
        </p>
        <div className="flex space-x-4 mt-6 mb-6">
          <a href="https://github.com/LEE-RUM">
            <button className="flex px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-900 text-white">
             Github <FaGithub size={20} className="ml-2" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/lirim-m/">
            <button className="flex px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-900 text-white">
              LinkedIn <FaLinkedin size={20} className="ml-2" />
            </button>
          </a>
          <a href="mailto:lmehmeti@my.ccsu.edu">
            <button className="flex px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-900 text-white">
               Email<AiFillMail size={20} className="ml-2"/>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
