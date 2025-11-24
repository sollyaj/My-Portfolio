import React from "react";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 my-[50px] mx-[170px] max-md:mx-[70px]">
      {/* TOP SECTION */}
      <div className="flex justify-between max-md:flex-col max-md:gap-12">
        {/* LEFT */}
        <div>
          <img src={footer_logo} alt="" />
          <p className="text-[20px] max-w-[400px] mt-4 text-[#d8d8d8]">
            I am a frontend developer from Lagos, Nigeria with 2 years of
            experience.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-9">
          {/* INPUT BOX */}
          <div className="flex items-center gap-7 bg-[#323238] py-5 px-8 pr-20 rounded-full hover:border hover:border-white transition">
            <img src={user_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none border-none text-[#a0a0a0] text-[18px] font-[Outfit]"
            />
          </div>

          {/* SUBSCRIBE BUTTON */}
          <div className="text-[20px] px-12 py-5 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] cursor-pointer transition-transform hover:scale-110">
            Subscribe
          </div>
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* BOTTOM SECTION */}
      <div className="flex justify-between text-[18px] max-md:flex-col-reverse max-md:mb-12">
        <p className="footer-bottom-left text-[#d8d8d8]">
          &copy; 2025 Solomon John. All rights reserved.
        </p>

        <div className="flex gap-12 mb-[50px] text-[#d8d8d8]">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
