import React from 'react';

export default function Contact() {
   return (
      <div className="flex flex-col mx-auto h-full mb-4 p-6" id='contact'>
         <h1 className="text-white text-center text-3xl font-bold h-full underline decoration-purple-500 pb-5">Contact Me</h1>
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/0bd17c2a-9560-444f-92d0-3e10b6d64863"
               method="POST"
               className="flex flex-col w-full md:w-6/12 text-white"
            >
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder="Message here..."
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <button
                  type="button"
                  className="text-center inline-block px-8 py-3 mb-5 w-max text-base font-bold rounded-md text-white bg-gradient-to-r from-purple-700 to-purple-400 drop-shadow-md"
               >
                  Send Message
               </button>
            </form>
         </div>
      </div>
   )
}