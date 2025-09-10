import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AchievementPage from "./AchievementPage"

gsap.registerPlugin(ScrollTrigger);

const Achievement = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      {
        opacity: 0,
        y: 80,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 1,
        ease: "elastic.out(1, 0.2)",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 50%",
          scrub:2
        },
      }
    );
  }, []);

  return (
    <>
    <section className="h-full flex items-center justify-center bg-black  text-white p-10">
      <h1
        ref={textRef}
        className="text-6xl font-extrabold flex flex-wrap justify-center"
      >
        {"Achievements".split("").map((char, index) => (
          <span
            key={index}
            className="letter inline-block mx-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-black"
            style={{ fontSize: "10rem" }}
          >
            {char}
          </span>
        ))}
      </h1>
    </section>
    <section className="w-full h-full bg-black">
          <AchievementPage/>

    </section>
    </>
  );
};

export default Achievement;
