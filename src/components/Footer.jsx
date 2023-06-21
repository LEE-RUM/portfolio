import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="bg-love-50 text-gray-300 py-8">
        <div className="flex mx-auto justify-center items-center space-x-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Lirim Mehmeti. All rights reserved.
          </p>

          <span> 
            <a href="https://github.com/LEE-RUM">
              <FaGithub size={25} />
            </a>
          </span> 

          <span> 
            <a href="https://www.linkedin.com/in/lirim-m/">
              <FaLinkedin size={25} />
            </a> 
          </span> 

        </div>
      </footer>
    )
  }
