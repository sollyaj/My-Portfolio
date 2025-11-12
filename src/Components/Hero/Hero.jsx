import React from "react";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center gap-[35px]"
    >
      {/* Profile image */}
      <img
        src={profile_img}
        alt="Profile"
        className="mt-[150px] max-md:mt-[120px] max-md:w-[260px]"
      />

      {/* Heading */}
      <h1 className="text-center w-[70%] text-[70px] font-semibold max-md:w-[90%] max-md:text-[50px] mt-[50px]">
        <span className="bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">
          I'm Solomon John,
        </span>{" "}
        frontend developer based in Nigeria.
      </h1>

      {/* Paragraph */}
      <p className="w-1/2 text-center text-[24px] leading-[40px] max-md:w-[60%] max-md:text-[18px] max-md:leading-[32px] my-[10px]">
        I am a frontend developer from Lagos, Nigeria with 2 years of experience.
      </p>

      {/* Action buttons */}
      <div className="flex items-center gap-[25px] text-[24px] font-medium mb-[50px] max-md:gap-[16px] max-md:text-[18px]">
        {/* Connect button */}
        <div className="px-[45px] py-[25px] rounded-[50px] bg-gradient-to-r from-[#DF8908] to-[#B415FF] cursor-pointer hover:border hover:border-white max-md:px-[30px] max-md:py-[20px]">
          <AnchorLink
            className="no-underline text-white"
            offset={50}
            href="#contact"
          >
            Connect With Me
          </AnchorLink>
        </div>

        {/* Resume button */}
        <div className="px-[75px] py-[25px] rounded-[50px] border-2 border-white cursor-pointer hover:border-[#B415FF] max-md:px-[50px] max-md:py-[20px]">
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
