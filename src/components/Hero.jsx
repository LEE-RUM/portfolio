import React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa"

export default function Hero(){
    return(
       <section className="text-center p-20 h-screen" id="hero">
        <h1 className="text-4xl font-bold">Developer and Code Coach</h1>
        <p className="py-4 text-2xl font-light">Hi, my name is Lirim Mehmeti,</p>
        <a href="https://github.com/LEE-RUM"><button className="p-1"><FaGithub size={30}/></button></a>
        <a href="https://www.linkedin.com/feed/"><button className="p-3"><FaLinkedin size={30}/></button></a>
        
        <ul className="flex">
            <li><img src="" alt="" /></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

       </section>
    )
}