import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const [word] = useState('Welcome  To My  universe');
  const textRef = useRef();
  const bgImageRef = useRef();

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll('.letter');

    gsap.fromTo(
      letters,
      { y: 100, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        skewY: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
      }
    );
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth } = window;
      const xPos = e.clientX;
      const offset = (xPos - innerWidth / 2) / (innerWidth / 2);

      gsap.to(textRef.current, {
        x: offset * 20,
        ease: 'power3.out',
        duration: 0.5,
      });

      gsap.to(bgImageRef.current, {
        x: -offset * 10,
        ease: 'power3.out',
        duration: 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='bg-black'>
      <div className='w-full h-screen relative flex flex-col justify-center px-4 sm:px-8 md:px-16 overflow-hidden'>
        <img
          ref={bgImageRef}
          className='w-full scale-102 h-full absolute top-0 left-0 object-cover opacity-70 filter brightness-75 contrast-125'
          src='/imageFile/mainsectionimage.jpg'
          alt='saurabh'
        />

        <div className='w-full h-[15rem] md:h-[20rem] absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent'></div>

        <div className='text-white font-bold relative z-10 flex flex-col items-start'>
          {/* Hero Text */}
          <div
            className='text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] flex flex-col overflow-hidden text-left mb-10'
            ref={textRef}
          >
            {word.split("  ").map((char, index) => (
              <h2 key={index} className="letter inline-block">
                {char}
              </h2>
            ))}
          </div>

          {/* Simple Responsive Buttons */}
          <div className='flex gap-4 sm:gap-6 flex-wrap'>
            {['GitHub', 'LinkedIn', 'Resume'].map((btn, i) => (
              <button
                key={i}
                className='px-5 sm:px-6 py-2 sm:py-3 rounded-lg border border-white text-white font-medium bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300'
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
