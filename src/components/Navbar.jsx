import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-11/12 md:w-1/2">
      {/* Gradient border */}
      <div className="p-[2px] bg-black shadow-lg border border-[#ffffff60] hover:scale-102 hover:shadow-[#ffffff32] hover:border-[#f0f3f1f9] transition-all duration-300 rounded-full">
        {/* Navbar background */}
        <div className="bg-neutral-900/50 backdrop-blur-md shadow-md rounded-full">
          <div className="px-2 md:px-4 flex items-center justify-between h-13">
            {/* Desktop Navbar */}
            <ul className="hidden md:flex justify-around items-center w-full py-2">
              <li className="flex gap-2 items-center text-white hover:bg-[#ffffff20] cursor-pointer p-2 rounded-full transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 fill-current"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c22.1 0 40-17.9 40-40V344c0-27.6-22.4-50-50-50H200c-27.6 0-50 22.4-50 50V472c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2H96c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H64c-17.7 0-32-14.3-32-32V255.5h-32c-18 0-32-14.3-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-11 24-11s17 4 24 11l255.4 239.4c7 7 10 15 10 24z"/></svg>
                <span className="text-sm font-bold">Home</span>
              </li>
              <li className="flex gap-2 items-center text-white  hover:bg-[#ffffff20] cursor-pointer p-2 rounded-full transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current"><path d="M256 0c17.7 0 32 14.3 32 32V64H416c35.3 0 64 28.7 64 64V256h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H480v64c0 35.3-28.7 64-64 64H288v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H96c-35.3 0-64-28.7-64-64V320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V128c0-35.3 28.7-64 64-64H224V32c0-17.7 14.3-32 32-32zM320 256h64v64H320V256zM96 256h64v64H96V256zM320 128h64v64H320V128zM96 128h64v64H96V128z"/></svg>
                <span className="text-sm font-bold">Skills</span>
              </li>
              <li className="flex gap-2 items-center text-white hover:bg-[#ffffff20] cursor-pointer p-2 rounded-full transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-current"><path d="M192 64c0-35.3 28.7-64 64-64s64 28.7 64 64V224H192V64zm448 96v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64H200.7c.4-.7 .8-1.3 1.3-1.9c.4-.5 .8-1 1.2-1.5L246 59.8c.8-.9 1.6-1.8 2.5-2.6c14.2-12.7 34.2-19.2 56.1-19.2s41.9 6.5 56.1 19.2c.9 .8 1.7 1.7 2.5 2.6L437.3 94.6c.4 .5 .8 1 1.2 1.5c.4 .6 .9 1.2 1.3 1.9H576c35.3 0 64 28.7 64 64zM392 288c-13.3 0-24-10.7-24-24s10.7-24 24-24c58.7 0 106.7-48 106.7-106.7c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 23.5-19.1 42.7-42.7 42.7s-42.7-19.1-42.7-42.7c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 40 32.7 72.7 72.7 72.7s72.7-32.7 72.7-72.7c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 48-38.7 86.7-86.7 86.7s-86.7-38.7-86.7-86.7c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 40 32.7 72.7 72.7 72.7s72.7-32.7 72.7-72.7c0-17.7-14.3-32-32-32s-32 14.3-32 32z"/></svg>
                <span className="text-sm font-bold">Education</span>
              </li>
              <li className="flex gap-2 items-center text-white hover:bg-[#ffffff20] cursor-pointer p-2 rounded-full transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-current"><path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192V192c0-53-43-96-96-96H306.7c-12.8 0-25.6 5.1-35.4 15L232 160H192c-53 0-96 43-96 96v96c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-17.7 14.3-32 32-32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm64 64h64v64H256v-64zm-64 64H192V192h-64v-64h64v64zm192 0H384V128h-64v64h64v64z"/></svg>
                <span className="text-sm font-bold">Projects</span>
              </li>
              <li className="flex gap-2 items-center text-white hover:bg-[#ffffff20] cursor-pointer p-2 rounded-full transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 290.5c20.7 15.8 47.9 15.8 68.6 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.4-52.5 17.4-75.3 0L0 176z"/></svg>
                <span className="text-sm font-bold">Contact</span>
              </li>
            </ul>

            {/* Mobile Navbar */}
            <div className="md:hidden flex items-center justify-end w-full">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6 transform transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`origin-center transition-all duration-300 ${isMenuOpen ? "scale-90 opacity-0" : "scale-100 opacity-100"}`}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M4 6H20M4 12H20M4 18H20"
                  />
                  <path
                    className={`origin-center transition-all duration-300 ${isMenuOpen ? "scale-100 opacity-100 rotate-45" : "scale-0 opacity-0 -rotate-45"}`}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M18 6L6 18M6 6L18 18"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden p-[2px] bg-[#020617] border border-[#467fbccc] rounded-lg absolute top-full mt-2 left-0 w-full transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-neutral-900/50 backdrop-blur-md shadow-lg rounded-lg">
          <ul className="flex flex-col p-4 space-y-2">
            <li className="flex gap-2 items-center text-white hover:bg-[#ffffff20] cursor-pointer p-2 rounded-lg transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 fill-current"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c22.1 0 40-17.9 40-40V344c0-27.6-22.4-50-50-50H200c-27.6 0-50 22.4-50 50V472c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2H96c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H64c-17.7 0-32-14.3-32-32V255.5h-32c-18 0-32-14.3-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-11 24-11s17 4 24 11l255.4 239.4c7 7 10 15 10 24z"/></svg>
              <span className="text-sm font-bold">Home</span>
            </li>
            <li className="flex gap-2 items-center text-white hover:bg-[#ffffff20] cursor-pointer p-2 rounded-lg transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current"><path d="M256 0c17.7 0 32 14.3 32 32V64H416c35.3 0 64 28.7 64 64V256h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H480v64c0 35.3-28.7 64-64 64H288v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H96c-35.3 0-64-28.7-64-64V320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V128c0-35.3 28.7-64 64-64H224V32c0-17.7 14.3-32 32-32zM320 256h64v64H320V256zM96 256h64v64H96V256zM320 128h64v64H320V128zM96 128h64v64H96V128z"/></svg>
              <span className="text-sm font-bold">Skills</span>
            </li>
            <li className="flex gap-2 items-center text-white hover:bg-[#ffffff20] cursor-pointer p-2 rounded-lg transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-current"><path d="M192 64c0-35.3 28.7-64 64-64s64 28.7 64 64V224H192V64zm448 96v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64H200.7c.4-.7 .8-1.3 1.3-1.9c.4-.5 .8-1 1.2-1.5L246 59.8c.8-.9 1.6-1.8 2.5-2.6c14.2-12.7 34.2-19.2 56.1-19.2s41.9 6.5 56.1 19.2c.9 .8 1.7 1.7 2.5 2.6L437.3 94.6c.4 .5 .8 1 1.2 1.5c.4 .6 .9 1.2 1.3 1.9H576c35.3 0 64 28.7 64 64zM392 288c-13.3 0-24-10.7-24-24s10.7-24 24-24c58.7 0 106.7-48 106.7-106.7c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 23.5-19.1 42.7-42.7 42.7s-42.7-19.1-42.7-42.7c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 40 32.7 72.7 72.7 72.7s72.7-32.7 72.7-72.7c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 48-38.7 86.7-86.7 86.7s-86.7-38.7-86.7-86.7c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 40 32.7 72.7 72.7 72.7s72.7-32.7 72.7-72.7c0-17.7-14.3-32-32-32s-32 14.3-32 32z"/></svg>
              <span className="text-sm font-bold">Education</span>
            </li>
            <li className="flex gap-2 items-center text-white hover:bg-[#ffffff20] cursor-pointer p-2 rounded-lg transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-current"><path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192V192c0-53-43-96-96-96H306.7c-12.8 0-25.6 5.1-35.4 15L232 160H192c-53 0-96 43-96 96v96c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-17.7 14.3-32 32-32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm64 64h64v64H256v-64zm-64 64H192V192h-64v-64h64v64zm192 0H384V128h-64v64h64v64z"/></svg>
              <span className="text-sm font-bold">Projects</span>
            </li>
            <li className="flex gap-2 items-center text-white hover:bg-[#ffffff20] cursor-pointer p-2 rounded-lg transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 290.5c20.7 15.8 47.9 15.8 68.6 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.4-52.5 17.4-75.3 0L0 176z"/></svg>
              <span className="text-sm font-bold">Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
