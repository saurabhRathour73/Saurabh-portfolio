import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedSVG = ({
  strokeColor = "black",
  width = "100%",   // Default full width
  height = "240",   // Default height
}) => {
  const svgRef = useRef();
  const pathRef = useRef();

  useEffect(() => {
    const handleMousemove = (event) => {
      const windowHeight = window.innerHeight;
      const relativeY = event.clientY - windowHeight / 2;
      const maxShift = 150;

      const controlY = 120 + Math.max(Math.min(relativeY * 0.5, maxShift), -maxShift);
      const newPath = `M 0 120 Q 500 ${controlY} 1000 120`;

      gsap.to(pathRef.current, {
        duration: 0.3,
        attr: { d: newPath },
        ease: "power3.out",
      });
    };

    const handleMouseleave = () => {
      const finalPath = `M 0 120 Q 500 120 1000 120`;

      gsap.to(pathRef.current, {
        duration: 1.5,
        attr: { d: finalPath },
        ease: "elastic.out(1, 0.2)",
      });
    };

    const svgEl = svgRef.current;
    svgEl.addEventListener("mousemove", handleMousemove);
    svgEl.addEventListener("mouseleave", handleMouseleave);

    return () => {
      svgEl.removeEventListener("mousemove", handleMousemove);
      svgEl.removeEventListener("mouseleave", handleMouseleave);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="mt-10"
      width={width}
      height={height}
      viewBox="0 0 1000 240"
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        d="M 0 120 Q 500 120 1000 120"
        stroke={strokeColor}
        strokeWidth="2"
        fill="transparent"
      />
    </svg>
  );
};

export default AnimatedSVG;
