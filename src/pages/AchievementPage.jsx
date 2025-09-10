import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AchievementPage = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;

      // Hover in animation
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          backgroundColor: '#ffffff',
          height: '6rem',           // Increase height smoothly
          duration: 0.3,
          ease:'power2.out'
        });

        const h1 = card.querySelector('h1');
        const button = card.querySelector('div');

        if (h1) {
          gsap.to(h1, {
            color: '#000000',
            duration: 0.3,
          });
        }

        if (button) {
          gsap.to(button, {
            color: '#000000',
            borderColor: '#000000',
            duration: 0.3,
          });
        }
      });

      // Hover out animation
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          backgroundColor: '#000000',
          height: '4rem',          // Original height
          duration: 0.3,
        });

        const h1 = card.querySelector('h1');
        const button = card.querySelector('div');

        if (h1) {
          gsap.to(h1, {
            color: '#ffffff',
            duration: 0.3,
          });
        }

        if (button) {
          gsap.to(button, {
            color: '#ffffff',
            borderColor: '#ffffff',
            duration: 0.3,
          });
        }
      });
    });
  }, []);

  const achievements = [
    "Code Urja Hackathon",
    "Skillsvaz Hackathon",
    "Smart India Hackathon",
    "Apna College Hackathon",
  ];

  return (
    <>
    <div className="space-y-4 p-4 rounded-2xl bg-black h-full flex flex-col justify-around overflow-hidden ">
      {achievements.map((title, i) => (
        <div
          key={i}
          ref={(el) => (cardRefs.current[i] = el)}
          className="w-full px-4 py-2 border border-[#ffffff32] bg-black flex items-center justify-between text-white h-16 rounded cursor-pointer"
        >
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="px-4 py-2 border rounded-full border-white bg-transparent">
            view
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default AchievementPage;
