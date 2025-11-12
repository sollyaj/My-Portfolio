import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.svg";

const About = () => {
  const skills = [
    { name: "HTML & CSS", width: "w-[60%]" },
    { name: "React JS", width: "w-[80%]" },
    { name: "JavaScript", width: "w-[50%]" },
    { name: "Next JS", width: "w-[40%]" },
  ];

  const achievements = [
    { count: "2+", label: "YEARS OF EXPERIENCE" },
    { count: "20+", label: "PROJECTS COMPLETED" },
    { count: "5+", label: "HAPPY CLIENTS" },
  ];

  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-[80px] my-[80px] mx-[170px] max-md:mx-[70px] max-md:items-start"
    >
      {/* Title */}
      <div className="relative">
        <h1 className="px-[30px] text-[80px] font-semibold max-md:text-[50px] max-md:px-0">
          About Me
        </h1>
        <img
          src={theme_pattern}
          alt="pattern"
          className="absolute bottom-0 right-0 -z-10 max-md:w-[130px] max-md:right-[20px]"
        />
      </div>

      {/* About content */}
      <div className="flex gap-[80px] max-md:flex-col">
        {/* Left: image */}
        <div className="max-md:hidden">
          <img src={about_profile} alt="About profile" />
        </div>

        {/* Right: text + skills */}
        <div className="flex flex-col gap-[80px]">
          {/* Paragraphs */}
          <div className="flex flex-col gap-[20px] text-[24px] font-medium max-md:text-[18px] max-md:leading-[22px]">
            <p>
              I am an experienced Frontend Developer with 2 years of work in
              various projects.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-[20px]">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-[50px] transition-transform duration-300 hover:scale-105 max-md:gap-[20px]"
              >
                <p className="min-w-[150px] text-[24px] font-medium max-md:text-[20px]">
                  {skill.name}
                </p>
                <hr
                  className={`h-[8px] rounded-[50px] bg-gradient-to-r from-[#DF8908] to-[#B415FF] border-0 outline-none ${skill.width} max-md:h-[6px]`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="flex justify-around w-full mb-[80px] max-md:justify-between">
        {achievements.map((a, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-[10px] transition-transform duration-500 hover:scale-110">
              <h1 className="text-[60px] font-bold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent max-md:text-[34px]">
                {a.count}
              </h1>
              <p className="text-[22px] font-medium text-center max-md:text-[16px]">
                {a.label}
              </p>
            </div>
            {i < achievements.length - 1 && <hr className="hidden max-md:hidden" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default About;
