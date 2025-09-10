import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

const ScrollSkils = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const scrollRef = useRef();



    useEffect(() => {
        const handleWheel = (event) => {
            // console.log('Mouse wheel detected!', event.deltaY);
            if (event.deltaY > 0) {
                gsap.to(scrollRef.current, {
                    transform: "translateX(-100%)",
                    duration: 20,
                    ease: "none",
                    repeat: -1,
                   
                })
            }
            else {
                gsap.to(scrollRef.current, {
                    transform: "translateX(100%)",
                    duration:20,
                    ease: "none",
                    repeat: -1
                })
            }
        };

        // Add wheel event listener
        window.addEventListener('wheel', handleWheel);

        // Cleanup on unmount
        // return () => {
        //     window.removeEventListener('wheel', handleWheel);
        // };
    }, []);

    return (
        <div className='w-full overflow-hidden'>
            <div ref={scrollRef} className='w-full h-20 bg-white flex gap-10 items-center justify-center px-4 py-2 ' >
                <ul className='flex items-center uppercase gap-10 font-bold text-black text-2xl'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Node</li>
                    <li>GitHub</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Node</li>
                    <li>GitHub</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </ul>
                <ul className='flex items-center uppercase gap-10 font-bold text-black text-2xl'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Node</li>
                    <li>GitHub</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Node</li>
                    <li>GitHub</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </ul>
                <ul className='flex items-center uppercase gap-10 font-bold text-black text-2xl'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Node</li>
                    <li>GitHub</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Node</li>
                    <li>GitHub</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </ul>

            </div>
        </div>
    )
}

export default ScrollSkils
