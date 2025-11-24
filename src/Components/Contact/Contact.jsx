import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5cd6ae53-4d14-44ed-9eda-eba148dea2fd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-20 my-20 mx-[170px] max-md:mx-[70px] max-md:gap-12 max-md:items-start"
    >
      {/* TITLE */}
      <div className="relative">
        <h1 className="px-8 text-[80px] font-semibold max-md:px-0 max-md:text-[50px] max-md:font-semibold">
          Get in touch
        </h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 right-0 -z-10 max-md:w-[130px] max-md:-mr-5"
        />
      </div>

      {/* SECTION */}
      <div className="flex gap-[150px] max-md:flex-col">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">
          <h1 className="text-[80px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent max-md:text-[54px]">
            Let's talk
          </h1>

          <p className="max-w-[550px] text-[#d8d8d8] text-[20px] leading-[35px] max-md:text-[18px]">
            I'm currently available to take on a new project, so feel free to
            get in touch.
          </p>

          <div className="flex flex-col gap-8 text-[22px] text-[#d8d8d8]">
            <div className="flex items-center gap-5 max-md:gap-5">
              <img src={mail_icon} className="max-md:w-[25px]" alt="" />
              <p>soajohworode@gmail.com</p>
            </div>

            <div className="flex items-center gap-5">
              <img src={call_icon} className="max-md:w-[25px]" alt="" />
              <p>08103400511</p>
            </div>

            <div className="flex items-center gap-5">
              <img src={location_icon} className="max-md:w-[25px]" alt="" />
              <p>LA, Nigeria</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-start gap-8"
        >
          <label className="text-[#d8d8d8] text-[22px] font-medium max-md:text-[20px]">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-[700px] h-[78px] bg-[#32323c] rounded px-5 text-[20px] text-[#a0a0a0] max-md:w-full"
          />

          <label className="text-[#d8d8d8] text-[22px] font-medium max-md:text-[20px]">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-[700px] h-[78px] bg-[#32323c] rounded px-5 text-[20px] text-[#a0a0a0] max-md:w-full"
          />

          <label className="text-[#d8d8d8] text-[22px] font-medium max-md:text-[20px]">
            Write your message here
          </label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            className="w-[650px] bg-[#32323c] rounded px-6 py-5 text-[20px] text-[#a0a0a0] max-md:w-[95%]"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-[#df8908] to-[#b415ff] text-white text-[22px] px-16 py-5 rounded-full mb-12 transition-transform duration-300 cursor-pointer hover:scale-110 max-md:text-[20px] max-md:px-10 max-md:py-4"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
