"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FlipWord() {
  const wordRef = useRef(null);

  useEffect(() => {
    const words = [
      "Frontend Developer",
      "Java Based DSA Problem Solver",
      "Learning MERN Stack",
    ];
    let index = 0;

    const animateWord = (newWord) => {
      const wordEl = wordRef.current;
      if (!wordEl) return;

      wordEl.innerHTML = "";

      // Har character (space bhi) ko span me dalna
      newWord.split("").forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.display = letter === " " ? "inline" : "inline-block"; // space ke liye inline
        span.style.marginRight = letter === " " ? "4px" : "0px"; // thoda gap
        span.style.transformOrigin = "50% 50%";
        wordEl.appendChild(span);
      });

      // GSAP animation ek-ek karke
      gsap.fromTo(
        wordEl.children,
        { rotationX: -90, opacity: 0, y: 20 },
        {
          rotationX: 0,
          opacity: 1,
          y: 0,
          ease: "back.out(1.7)",
          duration: 0.6,
          stagger: 0.05, // ek-ek karke
        }
      );
    };

    animateWord(words[index]);

    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      animateWord(words[index]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-3xl md:text-4xl font-bold text-white perspective-1000">
      <span className="text-2xl font-medium" ref={wordRef}></span>
    </div>
  );
}

