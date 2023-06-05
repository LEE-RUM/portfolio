import React from 'react';

export default function Contact() {
   return (
      <div className="flex flex-col mx-auto h-full mb-8 p-5" id='contact'>
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/(customSlugHere)"
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
                  className="text-center inline-block px-8 py-3 mb-5 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-700 to-purple-400 drop-shadow-md"
               >
                  Contact Me
               </button>
            </form>
         </div>
      </div>
   )
}