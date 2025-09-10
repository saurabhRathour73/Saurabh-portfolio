import React, { useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import gsap from "gsap";

const Contact = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const buttonRef = useRef(null);

  // Ripple effect on entire section
  const handleSectionMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const point = document.createElement("span");
    point.style.position = "absolute";
    point.style.left = `${x}px`;
    point.style.top = `${y}px`;
    point.style.width = "10px";
    point.style.height = "10px";
    point.style.backgroundColor = "white";
    point.style.borderRadius = "50%";
    point.style.pointerEvents = "none";
    point.style.transform = "translate(-50%, -50%)";
    point.style.opacity = 0.8;
    sectionRef.current.appendChild(point);

    gsap.to(point, {
      width: 100,
      height: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => point.remove(),
    });
  };

  // Card hover: background white + button black
  const handleCardMouseEnter = () => {
    gsap.to(cardRef.current, { backgroundColor: "#fff", duration: 0.5 });
    gsap.to(buttonRef.current, { backgroundColor: "#000", color: "#fff", duration: 0.3 });
  };

  const handleCardMouseLeave = () => {
    gsap.to(cardRef.current, { backgroundColor: "#171717", duration: 0.5 });
    gsap.to(buttonRef.current, { backgroundColor: "#fff", color: "#000", duration: 0.3 });
  };

  return (
    <section
      className="bg-black min-h-screen flex items-center justify-center p-10 relative overflow-hidden"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side - Contact Info */}
        <div className="text-white z-10 relative">
          <h2 className="text-4xl font-extrabold mb-4 text-white">Get in Touch</h2>
          <p className="text-gray-400 mb-8">
            Have a question or want to work together? Drop us a message!
          </p>

          {/* Email */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
              <Mail className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-400">Email</p>
              <p className="font-medium">saurabhs4343@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-400">Location</p>
              <p className="font-medium">Bhopal</p>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <form
          className="relative p-8 rounded-2xl shadow-lg w-full z-10 bg-neutral-900"
          ref={cardRef}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-black text-white placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-black text-white placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-lg bg-black text-white placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-black text-white placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
          <button
            type="button"
            ref={buttonRef}
            className="w-full py-3 rounded-lg bg-white text-black font-semibold flex items-center justify-center gap-2 transition"
          >
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
