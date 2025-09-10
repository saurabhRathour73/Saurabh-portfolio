import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AnimatedSVG from './Animation/AnimatedSVG';
import ExperienceStats from '../components/ExperienceStats';

const Project = () => {
  const textRef = useRef();
  const [word] = useState('PROJECT');

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll('.letter');

    gsap.fromTo(
      letters,
      { y: 70, opacity: 0, skewY: 10 },
      {
        y: 0,
        opacity: 1,
        skewY: 0,
        duration: 3,
        ease: "elastic.out(1, 0.2)",
        stagger: 0.1,
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className="w-full min-h-screen bg-black">
      <div className="flex flex-col justify-center items-center uppercase px-4 text-center">
        <h1
          ref={textRef}
          className="text-white text-[5rem] mt-10 sm:text-[7rem] md:text-[10rem] flex flex-wrap justify-center"
        >
          {word.split('').map((char, index) => (
            <span key={index} className="letter inline-block">
              {char}
            </span>
          ))}
        </h1>
        <h3 className="text-white text-[1.5rem] sm:text-[2rem] md:text-[2rem] mt-1 mb-3">
          Solving real-world problems with clean code and modern tech.
        </h3>
      </div>

      <div className="w-full h-screen bg-white p-4 rounded-t-[20%] overflow-hidden">
        <ExperienceStats/>
        <AnimatedSVG/>

      </div>
    </div>
  );
};

export default Project;
