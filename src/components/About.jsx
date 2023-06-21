import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Java', 'Python', 'Django', 'Bootstrap', 'Agile Development', 'Git'];

export default function About() {
  return (
    <section className="lg:px-32 px-10 py-16" id="about">
      <h1 className=" text-white text-center text-4xl font-bold h-full underline decoration-purple-500 pb-8">ABOUT ME</h1>
      <p className="text-center text-white font-semibold pb-8"> Here you can find some more information about me, my background and skills </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
        <div>
          <h1 className="text-2xl mb-6 font-bold">Get to know me!</h1>
          <p className="pb-5 font-light">Hi again, my name is <span className="font-extrabold">Lirim Mehmeti</span>. I'm a software developer and programming tutor. I graduated from <span className="font-bold">Central Connecticut State University</span> with a Bachelors in Computer Science.</p>
          <p className="pb-5 font-light">I enjoy programming and building websites. I had the opportunity to apply my skills as a <span className="font-extrabold">developer for New Britain Housing Authority</span>, where I worked for nine months. This experience allowed me to gain hands-on experience in developing software solutions and collaborating with a team. Currently I teach kids how to program in <span className="font-extrabold">Python, JavaScript and Java.</span></p>
          <p className="pb-5 font-light">I'm open to any full time oportunities in the software engineering field that can allow me to utilize my skills and also contribute to my growth as a developer.If you would like to chat, feel free to contact me on <span className="underline decoration-white font-extrabold"><a href="https://www.linkedin.com/in/lirim-m/">LinkedIn</a></span>.</p>
        </div>
        <div>
          <h1 className="text-2xl mb-6 font-bold">Tech Stack</h1>
          <div className="flex flex-wrap">
          {skills.map((skill, index) => (
              <span key={index} className="bg-gray-500 text-white px-4 py-2 rounded-md m-1">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
