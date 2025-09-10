import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const images = [
  'public/imageFile/hackthon 2.jpg',
  'public/imageFile/hackthon-1.jpg',
  'public/imageFile/hackthon 3.jpg',
  'public/imageFile/hackthon 4.jpg',
  'public/imageFile/hackthon5.jpg',
  'public/imageFile/hackthon 6.jpg'
];

const MouseImageSwitcher = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current || !imageRef.current) return;

      // Change image based on cursor X position
      const containerWidth = containerRef.current.offsetWidth;
      const segment = containerWidth / images.length;
      const index = Math.floor(e.clientX / segment);

      if (index !== currentImageIndex && index < images.length) {
        setCurrentImageIndex(index);

        gsap.to(imageRef.current, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            imageRef.current.src = images[index];
            gsap.to(imageRef.current, {
              opacity: 1,
              duration: 0.3,
            });
          },
        });
      }

      // Smoothly follow cursor
      gsap.to(imageRef.current, {
        x: e.clientX + 20,
        y: e.clientY + 20,
        duration: 0.3,
      });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [currentImageIndex]);

  return (
    <div
      ref={containerRef}
      className="w-full h-50 bg-black relative overflow-hidden"
    >
      {/* Floating image */}
      <img
        ref={imageRef}
        src={images[0]}
        alt="Floating"
        className="fixed w-64 h-40 pointer-events-none opacity-1 rounded shadow-lg"
        style={{ transform: 'translate(0, 0)', transition: 'opacity 0.3s' }}
      />
    </div>
  );
};

export default MouseImageSwitcher;
