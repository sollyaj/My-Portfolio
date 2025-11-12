import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center gap-[80px] my-[80px] mx-[170px] max-md:mx-[70px] max-md:items-start"
    >
      {/* Section title */}
      <div className="relative">
        <h1 className="px-[30px] text-[80px] font-semibold max-md:text-[50px] max-md:px-0">
          My Services
        </h1>
        <img
          src={theme_pattern}
          alt="pattern"
          className="absolute bottom-0 right-0 -z-10 max-md:w-[130px] max-md:mr-[-20px]"
        />
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-3 gap-[40px] mb-[60px] max-md:grid-cols-2 max-md:gap-[30px]">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-[20px] p-[60px] rounded-[10px] border-2 border-white cursor-pointer transition-transform duration-400 hover:scale-105 hover:border-[#ff00ff] hover:bg-gradient-to-tr hover:from-[#3f0028] hover:to-[#582300] max-md:pb-[32px]"
          >
            <h3 className="text-[28px] font-semibold">{service.s_no}</h3>

            <h2 className="text-[38px] font-extrabold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent max-md:text-[28px]">
              {service.s_name}
            </h2>

            <p className="text-[#d4d4d4] text-[24px] leading-[40px] max-w-[300px] max-md:text-[18px] max-md:leading-[32px]">
              {service.s_desc}
            </p>

            <div className="flex items-center gap-[20px] mt-[20px]">
              <p className="text-white">Read More</p>
              <img
                src={arrow_icon}
                alt="arrow"
                className="max-md:w-[20px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
