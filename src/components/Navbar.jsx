import React from "react"
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'

export default function Navbar(){
    return(
        <nav className=" bg-zinc-50 shadow-md h-14 flex justify-end items-center px-3">
            <ul className="hidden lg:flex space-x-5 pt-5 pr-3 justify-end">
                <li><a href="#project">Home</a></li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>         
            </ul> 
            <div className="flex lg:hidden">
                <button><AiOutlineMenu size={20} /></button>
            </div> 
        </nav>
    )
}