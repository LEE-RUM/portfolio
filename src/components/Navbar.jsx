import React ,{useState} from "react"
import { Link } from "react-scroll";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

export default function Navbar(){

    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
      setMenu(!menu);
    };

    return(
        <nav className="bg-love-50 shadow-md h-14 flex justify-end items-center px-3 py-8 sticky top-0 z-50 text-white">
            <li className="justify-start mr-auto list-none font-bold hover:cursor-pointer"> 
            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>LIRIM.DEV</Link> 
            </li>
            <ul className="hidden lg:flex space-x-5 pt-5 pr-3 pb-5 font-bold justify-end">
                <li className="hover:cursor-pointer">
                    <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                </li>
                <li className="hover:cursor-pointer">
                    <Link to="about" spy={true} smooth={true} offset={-60} duration={500}>About</Link>
                </li>
                <li className="hover:cursor-pointer">
                    <Link to="projects" spy={true} smooth={true} offset={-60} duration={500}>Projects</Link>
                </li>
                <li className="hover:cursor-pointer">
                    <Link to="contact" spy={true} smooth={true} offset={-60} duration={500}>Contact</Link>
                </li>        
            </ul> 
            
            <div onClick={handleMenu} className="flex lg:hidden">
                <button className="z-10">{menu ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}</button>
            </div>

            <ul className={menu ? 'block lg:hidden fixed text-center items-center left-0 pt-20 top-0 w-[100%] h-full bg-love  ease-in-out duration-700' : 'w-[100%] top-0 bottom-0 text-center items-center ease-in-out duration-700 fixed left-[-100%]'}>
                <li className="hover:cursor-pointer p-7 text-2xl">
                    <Link to="hero" spy={true} smooth={true} offset={-60} duration={700} onClick={handleMenu}>HOME</Link>
                </li>
                <li className="hover:cursor-pointer p-7 text-2xl">
                    <Link to="about" spy={true} smooth={true} offset={-60} duration={700} onClick={handleMenu}>ABOUT</Link>
                </li>
                <li className="hover:cursor-pointer p-7 text-2xl">
                    <Link to="projects" spy={true} smooth={true} offset={-60} duration={700} onClick={handleMenu}>PROJECTS</Link>
                </li>
                <li className="hover:cursor-pointer p-7 text-2xl">
                    <Link to="contact" spy={true} smooth={true} offset={-60} duration={700} onClick={handleMenu}>CONTACT</Link>
                </li>
            </ul>

        </nav>
    )
}