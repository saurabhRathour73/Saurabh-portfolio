import React from "react";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { FaTrophy, FaCalendarAlt, FaUserGraduate } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "Secondary Education (10th)",
      school: "RKHS Khutahin Bhatolia",
      year: " 2020",
      description:
        "Built a strong academic foundation with a focus on logical thinking and conceptual clarity across core subjects.",
      achievements: [
        { label: "Percentage: 79.6%", icon: <FaTrophy /> },
        { label: "Board: Bihar Board", icon: <FaSchool /> },
      ],
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      icon: <MdOutlineSchool className="text-2xl text-blue-400" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      title: "Senior Secondary Education (12th - PCM)",
      school: "M. P. Sinha Science College, Muzaffarpur",
      year: "2020 - 2022",
      description:
        "Focused on science and mathematics, enhancing analytical skills through problem-solving and concept-based learning.",
      achievements: [
        { label: "Percentage: 62.6%", icon: <FaTrophy /> },
        { label: "Stream: Physics, Chemistry, Maths", icon: <FaUserGraduate /> },
      ],
      subjects: ["Physics", "Chemistry", "Mathematics", "English"],
      icon: <FaSchool className="text-2xl text-green-400" />,
      color: "from-green-500 to-green-700",
    },
    {
      id: 3,
      title: "Bachelor of Technology (B.Tech - Electrical Engineering)",
      school: "Oriental Institute of Science and Technology",
      year: "2023 - Present",
      description:
        "Pursuing Electrical and Electronic Engineering",
      achievements: [
        { label: "CGPA: (till 4th sem)", icon: <FaTrophy /> },
      ],
      subjects: ["Programming", "Data Structures", "Web Development", "java"],
      icon: <FaUniversity className="text-2xl text-purple-400" />,
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <section className="bg-[#000000] min-h-screen w-full py-16 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div
        className="absolute top-1/4 left-1/4 w-[10rem] h-[10rem] rounded-full blur-3xl opacity-50 z-0 bg-cyan-400"
      />
      <div
        className="absolute top-[11rem] right-[9rem] w-[12rem] h-[12rem] rounded-full blur-3xl opacity-30 z-0 bg-green-400"
      />
      <div
        className="float-animation absolute bottom-[5rem] left-[10rem] w-[10rem] h-[10rem] rounded-full blur-3xl opacity-30 z-0 bg-purple-400"
      />
      <div
        className="absolute bottom-[7rem] right-[35rem] w-[14rem] h-[12rem] blur-3xl opacity-20 z-0 bg-white"

      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#c2bfbf] mb-4">Educational Journey</h2>
        <p className="text-gray-400 mb-12">
          Discover how academic excellence shapes innovative thinking and professional growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg border border-gray-800 rounded-2xl p-6 shadow-lg hover:scale-102 hover:shadow-[#ffffff28] hover:border-[#ffffffab] transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {edu.icon}
                <h3 className="ml-2 text-xl font-semibold text-white">{edu.title}</h3>
              </div>
              <p className="text-gray-300">{edu.school}</p>
              <div className="flex items-center text-gray-400 text-sm mt-2">
                <FaCalendarAlt className="mr-2" />
                {edu.year}
              </div>

              <p className="text-gray-400 mt-4 text-sm">{edu.description}</p>

              <h4 className="mt-4 font-semibold text-cyan-400 flex items-center">
                <FaTrophy className="mr-2" /> Key Achievements
              </h4>
              <ul className="mt-2 space-y-2 text-sm">
                {edu.achievements.map((ach, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="mr-2 text-cyan-400">{ach.icon}</span>
                    {ach.label}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {edu.subjects.map((sub, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs bg-gray-800 text-gray-200 rounded-lg"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
