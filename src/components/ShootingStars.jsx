"use client";
import { useEffect, useState } from "react";

const ShootingStars = ({ count = 8 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const genStars = [...new Array(count)].map(() => ({
      top: Math.random() * window.innerHeight * 0.3 + "px", 
      left: Math.random() * window.innerWidth * 0.7 + "px", 
      animationDelay: Math.random() * 5 + "s",
      animationDuration: Math.random() * 3 + 5 + "s", // 5s–8s slow
    }));
    setStars(genStars);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((style, i) => (
        <span
          key={i}
          className="shooting-star absolute"
          style={style} 
        />
      ))}
    </div>
  );
};

export default ShootingStars;
