import React, { useRef } from "react";

const EducationSection = () => {
  const cardRefs = useRef([]);

  const educationData = [
    {
      title: "Secondary Education (10th)",
      institution: "RKHS Khutahin bhatoliya",
      duration: "2010 - 2020",
      description:
        "Built a strong academic foundation with a focus on logical thinking and conceptual clarity across core subjects.",
      achievements: [
        { label: "Percentage", value: "79.6%" },
        { label: "Board", value: "Bihar Board" },
      ],
      subjects: ["Mathematics", "Science", "English", "Social Science"],
    },
    {
      title: "Senior Secondary Education (12th - PCM)",
      institution: "M. P. Sinha Science College, Muzaffarpur",
      duration: "2020 - 2022",
      description:
        "Focused on science and mathematics, enhancing analytical skills through problem-solving and concept-based learning.",
      achievements: [
        { label: "Percentage", value: "62.6%" },
        { label: "Stream", value: "Physics, Chemistry, Maths" },
      ],
      subjects: ["Physics", "Chemistry", "Mathematics", "English"],
    },
    {
      title: "Bachelor of Technology (B.Tech)",
      institution: "Oriental Institute of Science and Technology",
      duration: "2023 - Present",
      description:
        "Pursuing btech from Oriental Institute of Science and Technology bhopal ",
      achievements: [],
      subjects: [],
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-12 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
        My Education Journey
      </h1>

      <p className="text-center text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-16">
        My education shaped my foundation as a developer, helping me solve
        real-world problems with clean code and modern solutions.
      </p>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-8 lg:gap-10 max-w-7xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="border border-white p-6 sm:p-8 rounded-lg text-white flex-1 min-w-[250px] md:min-w-[300px] hover:scale-105 transform transition-all duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              {edu.title}
            </h2>
            <p className="text-white text-base sm:text-lg font-medium mb-1 sm:mb-2">
              🎓 {edu.institution}
            </p>
            <p className="text-white text-sm sm:text-base mb-2 sm:mb-4">
              📅 {edu.duration}
            </p>
            <p className="italic text-white text-sm sm:text-base mb-4">
              "{edu.description}"
            </p>

            {edu.achievements.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold text-yellow-400 mb-2 text-sm sm:text-base">
                  🏆 Key Achievements
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {edu.achievements.map((ach, i) => (
                    <span
                      key={i}
                      className="border border-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {ach.label}: {ach.value}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {edu.subjects.length > 0 && (
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {edu.subjects.map((subject, i) => (
                  <span
                    key={i}
                    className="border border-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
