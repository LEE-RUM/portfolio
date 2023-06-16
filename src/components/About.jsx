import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Java', 'Python', 'Django', 'Bootstrap', 'Git'];

export default function About() {
  return (
    <section className="lg:px-32 px-10 py-16" id="about">
      <h1 className=" text-white text-center text-4xl font-bold h-full underline decoration-purple-500 pb-8">ABOUT ME</h1>
      <p className="text-center text-white font-semibold pb-6"> Here you can find some more information about me, my background and skills </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
        <div>
          <h1 className="text-2xl mb-6 font-bold">Get to know me!</h1>
          <p className="pb-4 font-light">Hi again, my name is <span className="font-extrabold">Lirim Mehmeti</span>. I'm a developer and programming tutor. I graduated from <span className="font-bold">Central Connecticut State University</span> with a Bachelors in CS.</p>
          <p className="pb-4 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus, odio temporibus sapiente tempore quibusdam aspernatur facere. Cum vero odit cumque, tenetur, voluptas perferendis architecto dignissimos, error blanditiis iure nemo.</p>
          <p className="font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, enim! Dignissimos eveniet voluptas soluta accusamus dolores sequi rem reiciendis eos hic, deleniti distinctio quam mollitia quis tempore aliquid eum officiis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quibusdam rerum, maiores magnam voluptate est quisquam ex facere magni qui quod sunt delectus ullam asperiores a ea, quidem, quia vero?</p>
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
