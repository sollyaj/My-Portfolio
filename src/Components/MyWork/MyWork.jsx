import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Mywork = () => {
  return (
    <div
      id="work"
      className="flex flex-col items-center justify-center gap-20 my-20 mx-[170px] max-md:mx-[70px] max-md:gap-12 max-md:items-start"
    >
      {/* TITLE */}
      <div className="relative">
        <h1 className="px-8 text-[80px] font-extrabold max-md:px-0 max-md:text-[50px] max-md:font-semibold">
          My latest work
        </h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 right-0 -z-10 max-md:w-[130px] max-md:-mr-5"
        />
      </div>

      {/* WORK GRID */}
      <div
        className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-md:gap-8"
      >
        {mywork_data.map((work, index) => (
          <div key={index} className="flex flex-col gap-3">
            {/* IMAGE */}
            {work.link ? (
              <a href={work.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={work.w_img}
                  alt={work.w_name}
                  className="w-[390px] h-[265px] cursor-pointer transition-transform duration-300 hover:scale-110 hover:border-[4px] hover:border-[#ff00ff] hover:rounded-lg max-md:w-full max-md:h-full"
                />
              </a>
            ) : (
              <img
                src={work.w_img}
                alt={work.w_name}
                className="w-[390px] h-[265px] cursor-pointer transition-transform duration-300 hover:scale-110 hover:border-[4px] hover:border-[#ff00ff] hover:rounded-lg max-md:w-full max-md:h-full"
              />
            )}

            <h3 className="text-xl font-semibold">{work.w_name}</h3>
            {work.description && (
              <p className="text-gray-300 text-lg leading-7">
                {work.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex gap-4 border-2 border-white rounded-full px-14 py-7 text-[22px] font-medium cursor-pointer transition-all duration-500 mb-20 hover:gap-8 max-md:px-10 max-md:py-5 max-md:text-[18px] max-md:mx-auto">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Mywork;
