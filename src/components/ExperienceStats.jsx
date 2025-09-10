import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { label: "Projects", value: 5, suffix: "+" },
  { label: "Clones", value: 20, suffix: "+" },
  { label: "Industry Experience", value: 0, suffix: " years" },
];

const AnimatedCounters = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((counter, index) => {
      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: statsData[index].value,
          duration: 1.5,
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%", // animation starts when the element is 80% from the top of viewport
            toggleActions: "play none none none", // only play once
          },
          onUpdate: () => {
            counter.innerText = `${Math.floor(counter.innerText)}${statsData[index].suffix}`;
          },
        }
      );
    });
  }, []);

  return (
    <section className=" px-6 py-12 sm:py-16 flex flex-col items-center">
     

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center   p-8 min-w-[180px] hover:scale-105 transform transition-all duration-300"
          >
            <span
              ref={(el) => (countersRef.current[index] = el)}
              className="text-6xl sm:text-9xl font-bold text-black"
            >
              0
            </span>
            <span className="mt-2 text-lg font-bold sm:text-3xl text-black">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedCounters;
