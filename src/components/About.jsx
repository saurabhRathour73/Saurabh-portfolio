import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const letterRefs = useRef([]);

  const fullText = "Hello! I'm Saurabh Kumar, a passionate Frontend developer and Problem Solver focused on building responsive, high-performance web applications with clean and modern UI. As the creator of multiple front-end projects and UI clones, I aim to turn design concepts into pixel-perfect reality. My goal is to deliver seamless user experiences by combining creative design with efficient code. I’m currently sharpening my skills in backend development to become a full-stack developer and build complete web solutions. I'm a continuous learner who loves turning ideas into working products. I strive to contribute to the dev community by creating projects that inspire and add real-world value.";

  useEffect(() => {
    letterRefs.current = letterRefs.current.slice(0, letterRefs.current.length);

    gsap.to(letterRefs.current, {
      opacity: 1,
      duration: 1,
      stagger: 0.02,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        end: "bottom 80%",
        scrub: true,
      }
    });
  }, []);

  const splitLetters = (text) =>
    text.split("").map((letter, i) => {
      const displayLetter = letter === " " ? "\u00A0" : letter;
      return (
        <span
          key={i}
          ref={(el) => {
            if (el && !letterRefs.current.includes(el)) {
              letterRefs.current.push(el);
            }
          }}
          className='inline-block opacity-20'
        >
          {displayLetter}
        </span>
      );
    });

  return (
    <section
      ref={containerRef}
      className='w-full min-h-screen flex flex-col justify-center items-center text-center p-6 md:p-10 bg-black text-white'
    >
      {/* Name */}
      <h2 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 flex flex-wrap justify-center'>
        {splitLetters("Saurabh Kumar")}
      </h2>

      {/* Profession */}
      <h3 className='text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-gray-300 flex flex-wrap justify-center'>
        {splitLetters("MERN Stack Developer & Problem Solver")}
      </h3>

      {/* Description */}
      <p className='text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl text-gray-200 flex flex-wrap justify-center'>
        {splitLetters(fullText)}
      </p>
    </section>
  );
};

export default About;
