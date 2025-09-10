import React from 'react';
import TextPressure from '../pages/Animation/TextPressure';
import AnimatedSVG from '../pages/Animation/AnimatedSVG';

const MySkils = () => {
  return (
    <div className="w-full min-h-screen px-4 sm:px-10 bg-black">
      <div className="w-full text-white text-[5rem] sm:text-[7rem] md:text-[10rem] uppercase  mt-10">
        <TextPressure text='SKILLS' />
      </div>

      {/* Skills Card */}
      <div className="px-4 sm:px-10 py-5  border-t-white border-b-white mt-10">
        <div className="text-white">
          <h1 className="text-2xl sm:text-3xl uppercase">Programming Skills</h1>
          <div className="flex flex-wrap gap-3 mt-5">
            <span className="py-2 px-4 border rounded-2xl">Java</span>
            <span className="py-2 px-4 border rounded-2xl">LeetCode</span>
            <span className="py-2 px-4 border rounded-2xl">GeeksforGeeks</span>
          </div>
        </div>
        <AnimatedSVG strokeColor="#fff" width="100%" height="100" />
      </div>

      <div className="px-4 sm:px-10 py-2  border-b-white mt-5">
        <div className="text-white">
          <h1 className="text-2xl sm:text-3xl uppercase">Frontend Development</h1>
          <div className="flex flex-wrap gap-3 mt-5">
            <span className="py-2 px-4 border rounded-2xl">React JS</span>
            <span className="py-2 px-4 border rounded-2xl">Tailwind</span>
            <span className="py-2 px-4 border rounded-2xl">JavaScript</span>
            <span className="py-2 px-4 border rounded-2xl">HTML</span>
            <span className="py-2 px-4 border rounded-2xl">CSS</span>
          </div>
        </div>
        <AnimatedSVG strokeColor="#fff" width="100%" height="100" />
      </div>

      <div className="px-4 sm:px-10 py-5  border-b-white mt-5">
        <div className="text-white">
          <h1 className="text-2xl sm:text-3xl uppercase">Backend Development</h1>
          <div className="flex flex-wrap gap-3 mt-5">
            <span className="py-2 px-4 border rounded-2xl">Node JS</span>
            <span className="py-2 px-4 border rounded-2xl">Express</span>
            <span className="py-2 px-4 border rounded-2xl">MongoDB</span>
          </div>
        </div>
        <AnimatedSVG strokeColor="#fff" width="100%" height="100" />
      </div>

      <div className="px-4 sm:px-10 py-5  border-b-white mt-5">
        <div className="text-white">
          <h1 className="text-2xl sm:text-3xl uppercase">UI/UX Design</h1>
          <div className="flex flex-wrap gap-3 mt-5">
            <span className="py-2 px-4 border rounded-2xl">Figma</span>
            <span className="py-2 px-4 border rounded-2xl">Responsive Design</span>
          </div>
        </div>
        <AnimatedSVG strokeColor="#fff" width="100%" height="100" />
      </div>

      <div className="px-4 sm:px-10 py-5  border-b-white mt-5">
        <div className="text-white">
          <h1 className="text-2xl sm:text-3xl uppercase">Tools & Technologies</h1>
          <div className="flex flex-wrap gap-3 mt-5">
            <span className="py-2 px-4 border rounded-2xl">VS Code</span>
            <span className="py-2 px-4 border rounded-2xl">Git & GitHub</span>
          </div>
        </div>
      </div>
      <AnimatedSVG strokeColor="#fff" width="100%" height="100" />
    </div>
  );
};

export default MySkils;
